import path from "path";

export default function jsonapiWarnPlugin() {
    return {
        name: "jsonapi-warn-plugin",
        enforce: "pre",
        transform(code, id) {
            if (!id.endsWith(".md")) return;

            const relativePath = path.relative(process.cwd(), id);
            if (!relativePath.includes("jsonapi")) return;

            const warningBlock = [
                "::: warning",
                "⚠️ The JSON:API is deprecated and it will be removed.",
                ":::",
                "",
            ].join("\n");

            if (code.startsWith("---")) {
                const endOfFrontmatter = code.indexOf("---", 3);
                if (endOfFrontmatter !== -1) {
                    const before = code.slice(0, endOfFrontmatter + 3);
                    const after = code.slice(endOfFrontmatter + 3);
                    return {
                        code: `${before}\n\n${warningBlock}${after}`,
                        map: null,
                    };
                }
            }

            return {
                code: warningBlock + code,
                map: null,
            };
        },
    };
}
