/**
 *
 * Custom header for Resume
 *
 * @param Object For example: {fileInfo: base: "Demo.md", dir: ".../markdown-themeable-pdf/tests", ext: ".md", name: "Demo"}, root: "/", exportType: "pdf", destFileBase: "Demo.pdf", destFile: "......./markdown-themeable-pdf/tests/Demo.pdf"}
 * @returns Object {{height: string, contents: string}}
 */
module.exports = function (info) {
    return {
        height: '0cm',
        contents: '<div style="text-align: right;"></div>'
    };
};
