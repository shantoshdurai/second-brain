"""
Module to build the markdown file into JSON objects.
"""

import json
import os
import re
from typing import Dict, Any, List, Optional

# Configuration
DOCS_DIR = "docs"
OUTPUT_FILE = "js/data.js"


def parse_markdown(file_path: str, group: Optional[str] = None) -> Dict[str, Any]:
    """
    Parse a markdown file to extract frontmatter and content.

    :param file_path: The absolute or relative path to the markdown file.
    :param group: The category group this file belongs to.
    :return: A dictionary containing metadata and the markdown content.
    """
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract Wikilinks: [[ID]] or [[ID|Label]]
    file_id = os.path.splitext(os.path.basename(file_path))[0]
    links = re.findall(r"\[\[([^|\]\n]+)(?:\|[^\]\n]+)?\]\]", content)
    links = [link.strip().lower() for link in links]
    links = list({link for link in links if link != file_id.lower()}) # Unique, exclude self

    meta = {
        "id": file_id.lower(),
        "title": os.path.splitext(os.path.basename(file_path))[0]
        .replace("-", " ")
        .title(),
        "icon": "far fa-file-alt",
        "desc": "",
        "tags": [],
        "links": links,
        "group": group,
    }

    match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)", content, re.DOTALL)

    if match:
        frontmatter = match.group(1)
        markdown_body = match.group(2)

        for line in frontmatter.split("\n"):
            if ":" in line:
                key, value = line.split(":", 1)
                key = key.strip()
                value = value.strip()

                if key == "tags":
                    meta["tags"] = [t.strip() for t in value.replace("[", "").replace("]", "").split(",")]
                elif key not in {"links", "group", "id"}:
                    meta[key] = value

        return {**meta, "content": markdown_body}
    
    return {**meta, "content": content}


def get_folder_meta(folder_path: str) -> Dict[str, Any]:
    """
    Retrieve metadata for a folder from a _meta.json file if it exists.

    :param folder_path: The filesystem path to the folder.
    :return: A dictionary containing the folder's metadata.
    """
    meta_path = os.path.join(folder_path, "_meta.json")
    defaults = {
        "id": os.path.basename(folder_path),
        "title": os.path.basename(folder_path).replace("_", " ").title(),
        "icon": "fas fa-folder",
        "desc": "",
    }

    if os.path.exists(meta_path):
        try:
            with open(meta_path, "r", encoding="utf-8") as f:
                custom = json.load(f)
                defaults.update(custom)
        except json.JSONDecodeError:
            pass

    return defaults


def build_tree(current_path: str, group: Optional[str] = None) -> List[Dict[str, Any]]:
    """
    Recursively build the documentation tree from the directory structure.

    :param current_path: The path of the directory to scan.
    :param group: The category group to assign to items.
    :return: A list of dictionaries representing files and subdirectories.
    """
    items = []

    try:
        entries = sorted(os.listdir(current_path))
    except FileNotFoundError:
        print(f"Error: Directory '{current_path}' not found.")
        return []

    for entry in entries:
        full_path = os.path.join(current_path, entry)

        if entry.startswith(".") or entry == "_meta.json":
            continue

        if os.path.isdir(full_path):
            # If group is not set, this top-level folder becomes the group
            current_group = group if group else entry.lower()
            meta = get_folder_meta(full_path)
            children = build_tree(full_path, group=current_group)

            if children:
                items.append(
                    {
                        "id": meta["id"],
                        "title": meta["title"],
                        "icon": meta.get("icon", "fas fa-folder"),
                        "desc": meta.get("desc", ""),
                        "view": meta.get("view"),
                        "group": current_group,
                        "children": children,
                    }
                )

        elif entry.endswith(".md"):
            data = parse_markdown(full_path, group=group)
            items.append(data)

    return items


def main() -> None:
    """
    Main execution function to build the wiki data.

    :return: None
    """
    print(f"Scanning '{DOCS_DIR}'...")

    if not os.path.exists(DOCS_DIR):
        os.makedirs(DOCS_DIR)
        print(f"Created empty {DOCS_DIR} folder.")

    wiki_data = {}

    sections = sorted(os.listdir(DOCS_DIR))

    for section_name in sections:
        section_path = os.path.join(DOCS_DIR, section_name)

        if os.path.isdir(section_path) and not section_name.startswith("."):
            clean_key = section_name.split("_")[-1].lower()
            meta = get_folder_meta(section_path)
            items = build_tree(section_path)
            wiki_data[clean_key] = {"title": meta["title"], "items": items}

    # --- Backlinks Processing ---
    backlinks_index = {}

    def map_links(node):
        if "links" in node:
            for link_id in node["links"]:
                link_id = link_id.lower()
                if link_id not in backlinks_index:
                    backlinks_index[link_id] = []
                if node["id"] not in backlinks_index[link_id]:
                    backlinks_index[link_id].append(node["id"])
        
        if "children" in node:
            for child in node["children"]:
                map_links(child)

    # Pass 2: Build the inverted index
    for section_key, section_data in wiki_data.items():
        for item in section_data.get("items", []):
            map_links(item)

    def inject_backlinks(node):
        node["backlinks"] = backlinks_index.get(node["id"], [])
        if "children" in node:
            for child in node["children"]:
                inject_backlinks(child)

    # Pass 3: Append backlinks to tree
    for section_key, section_data in wiki_data.items():
        for item in section_data.get("items", []):
            inject_backlinks(item)
            
    # Serialize
    js_content = f"const wikiData = {json.dumps(wiki_data, indent=4)};"

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"Build complete! Data written to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
