import { strToQueryParams } from "../clientUtils/url"

export const DEFAULT_COLUMN_DELIMITER = "-is-"
export const DEFAULT_ROW_DELIMITER = "-and-"

// Note: assumes that neither no key nor value in obj has a newline or tab character
export const objectToPatch = (
    obj: any,
    rowDelimiter = DEFAULT_ROW_DELIMITER,
    columnDelimiter = DEFAULT_COLUMN_DELIMITER
) =>
    Object.keys(obj)
        .map((key) => [key, obj[key]].join(columnDelimiter))
        .join(rowDelimiter)

export const objectFromPatch = (
    patch = "",
    rowDelimiter = DEFAULT_ROW_DELIMITER,
    columnDelimiter = DEFAULT_COLUMN_DELIMITER
) => {
    const obj: any = {}
    patch.split(rowDelimiter).forEach((line) => {
        line = line.trim()
        if (!line) return
        const words = line.split(columnDelimiter)
        const key = words.shift() as string
        obj[key] = words.join(columnDelimiter)
    })
    return obj
}

export const getPatchFromQueryString = (
    queryString = "",
    patchKeyword = "patch"
) => decodeURIComponent(strToQueryParams(queryString)[patchKeyword] ?? "")
