import { CoreTable } from "./CoreTable"
import { ColumnSlug } from "./CoreTableConstants"
import { OwidColumnDef, OwidTableSlugs } from "./OwidTableConstants"

export function timeColumnSlugFromColumnDef(def: OwidColumnDef) {
    return def.isDailyMeasurement ? OwidTableSlugs.day : OwidTableSlugs.year
}

export function makeOriginalTimeSlugFromColumnSlug(slug: ColumnSlug) {
    return `${slug}-originalTime`
}

export function getOriginalTimeColumnSlug(
    table: CoreTable,
    slug: ColumnSlug
): ColumnSlug | undefined {
    const originalTimeSlug = makeOriginalTimeSlugFromColumnSlug(slug)
    if (table.columnSlugs.includes(originalTimeSlug)) return originalTimeSlug
    return table.timeColumn?.slug
}