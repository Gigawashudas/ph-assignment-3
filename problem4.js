/** Problem 04 - (Delete / Store) */
var fileName= "#exp.mp4";

if (
    fileName.startsWith("#") ||
    fileName.endsWith(".pdf") ||
    fileName.endsWith(".docx")
) {
    console.log("Store");
} else {
    console.log("Delete")
}