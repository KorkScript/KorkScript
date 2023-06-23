const path = require("path")
const fs = require("fs")

export async function getFileList(dirname: string) {
    let files: string[]= [];
    const items = await fs.readdir(dirname, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            files = [
                ...files,
                ...(await getFileList(`${dirname}/${item.name}`)),
            ];
        } else {
            files.push(`${dirname}/${item.name}`);
        }
    }

    return files;
};

