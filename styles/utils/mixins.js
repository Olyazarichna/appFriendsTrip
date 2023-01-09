
const fonts = (
    fontSize = 12,
    fontWeight = "500",
    lineHeight = 1.3
) => {
    
    return {
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: fontSize * lineHeight
}
}

export default fonts;