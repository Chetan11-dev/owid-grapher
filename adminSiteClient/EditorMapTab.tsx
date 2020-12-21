import * as React from "react"
import { computed, action } from "mobx"
import { observer } from "mobx-react"
import { isEmpty } from "../clientUtils/Util"
import {
    MapProjectionLabels,
    MapProjectionName,
} from "../grapher/mapCharts/MapProjections"
import { ChartEditor } from "./ChartEditor"
import {
    NumericSelectField,
    NumberField,
    SelectField,
    Toggle,
    Section,
} from "./Forms"
import { EditorColorScaleSection } from "./EditorColorScaleSection"
import { LegacyVariableId } from "../clientUtils/owidTypes"
import { MapConfig } from "../grapher/mapCharts/MapConfig"
import { ChartDimension } from "../grapher/chart/ChartDimension"
import { ColorScale } from "../grapher/color/ColorScale"
import { MapChart } from "../grapher/mapCharts/MapChart"

@observer
class VariableSection extends React.Component<{
    mapConfig: MapConfig
    filledDimensions: ChartDimension[]
}> {
    @action.bound onVariableId(variableId: LegacyVariableId) {
        this.props.mapConfig.columnSlug = variableId.toString()
    }

    @action.bound onProjection(projection: string | undefined) {
        // todo: restore
        // this.props.mapConfig.projection = projection as MapProjectionName
    }

    render() {
        const { mapConfig, filledDimensions } = this.props

        if (isEmpty(filledDimensions))
            return (
                <section>
                    <h2>Add some variables on data tab first</h2>
                </section>
            )

        const projections = Object.keys(MapProjectionLabels)
        const labels = Object.values(MapProjectionLabels)

        return (
            <Section name="Map">
                <NumericSelectField
                    label="Variable"
                    value={
                        mapConfig.columnSlug
                            ? parseInt(mapConfig.columnSlug)
                            : undefined
                    }
                    options={filledDimensions.map((d) => d.variableId)}
                    optionLabels={filledDimensions.map(
                        (d) => d.column.displayName
                    )}
                    onValue={this.onVariableId}
                />
                <SelectField
                    label="Region"
                    value={undefined /* todo: restore */}
                    options={projections}
                    optionLabels={labels}
                    onValue={this.onProjection}
                />
            </Section>
        )
    }
}

@observer
class TimelineSection extends React.Component<{ mapConfig: MapConfig }> {
    @action.bound onToggleHideTimeline(value: boolean) {
        this.props.mapConfig.hideTimeline = value || undefined
    }

    @action.bound setMapTime(time: number | undefined) {
        // this.props.mapTime = time
        // todo: fix?
    }

    @action.bound onTolerance(tolerance: number | undefined) {
        // this.props.mapTimeTolerance = tolerance
        // todo: fix?
    }

    render() {
        const { mapConfig } = this.props
        const mapTime = undefined // todo
        const mapTimeTolerance = undefined // todo
        return (
            <Section name="Timeline">
                <NumberField
                    label="Target year"
                    value={mapTime}
                    onValue={this.setMapTime}
                    allowNegative
                />
                <Toggle
                    label="Hide timeline"
                    value={!!mapConfig.hideTimeline}
                    onValue={this.onToggleHideTimeline}
                />
                <NumberField
                    label="Tolerance of data"
                    value={mapTimeTolerance}
                    onValue={this.onTolerance}
                    helpText="Specify a range of years from which to pull data. For example, if the map shows 1990 and tolerance is set to 1, then data from 1989 or 1991 will be shown if no data is available for 1990."
                />
            </Section>
        )
    }
}

@observer
class TooltipSection extends React.Component<{ mapConfig: MapConfig }> {
    @action.bound onTooltipUseCustomLabels(tooltipUseCustomLabels: boolean) {
        this.props.mapConfig.tooltipUseCustomLabels = tooltipUseCustomLabels
            ? true
            : undefined
    }

    render() {
        const { mapConfig } = this.props
        return (
            <Section name="Tooltip">
                <Toggle
                    label={
                        "Show custom label in the tooltip, instead of the numeric value"
                    }
                    value={!!mapConfig.tooltipUseCustomLabels}
                    onValue={this.onTooltipUseCustomLabels}
                />
            </Section>
        )
    }
}

@observer
export class EditorMapTab extends React.Component<{ editor: ChartEditor }> {
    @computed get grapher() {
        return this.props.editor.grapher
    }

    render() {
        const { grapher } = this
        const mapConfig = grapher.map
        const { mapColumnSlug } = grapher
        const mapChart = new MapChart({ manager: this.grapher })
        const colorScale = mapChart.colorScale

        const isReady = !!mapColumnSlug && grapher.table.has(mapColumnSlug)

        return (
            <div className="EditorMapTab tab-pane">
                <VariableSection
                    mapConfig={mapConfig}
                    filledDimensions={grapher.filledDimensions}
                />
                {isReady && (
                    <React.Fragment>
                        <TimelineSection mapConfig={mapConfig} />
                        <EditorColorScaleSection
                            scale={colorScale}
                            features={{
                                visualScaling: true,
                                legendDescription: false,
                            }}
                        />
                        <TooltipSection mapConfig={mapConfig} />
                    </React.Fragment>
                )}
            </div>
        )
    }
}
