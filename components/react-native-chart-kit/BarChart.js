var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { View } from "react-native";
import { Defs, G, LinearGradient, Rect, Stop, Svg, Text, Image } from "react-native-svg";
import AbstractChart from "./AbstractChart";
import { colors, dimensions } from '../../components/constants';
import { normalize } from '../../components/FondNormilize';
var barWidth = 32;
var BarChart = /** @class */ (function (_super) {
    __extends(BarChart, _super);
    function BarChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getBarPercentage = function () {
            var _a = _this.props.chartConfig.barPercentage, barPercentage = _a === void 0 ? 1 : _a;
            return barPercentage;
        };
        _this.renderBars = function (_a) {
            var data = _a.data, width =_a.width, height = _a.height, paddingTop = _a.paddingTop, paddingRight = _a.paddingRight, barRadius = _a.barRadius, withCustomBarColorFromData = _a.withCustomBarColorFromData;
            var baseHeight = _this.calcBaseHeight(data, height);
            return data.map(function (x, i) {
                var barHeight = 1.13 * _this.calcHeight(x, data, height);
                var barWidth = 32 * _this.getBarPercentage();
                // return (<Rect key={Math.random()} x={paddingRight +
                //     (i * (width - paddingRight)) / data.length +
                //     barWidth / 2} y={((barHeight > 0 ? baseHeight - barHeight : baseHeight) / 4) * 3 +
                //     paddingTop} rx={barRadius} width={barWidth} height={(Math.abs(barHeight) / 4) * 3} fill={withCustomBarColorFromData
                //     ? "url(#customColor_0_" + i + ")"
                //     : "url(#fillShadowGradientFrom)"}/>);

                // y={((barHeight > 0 ? baseHeight - barHeight : baseHeight) / 4) * 3 + paddingTop}

                return (<Rect key={Math.random()} x={paddingRight +
                    (0 * (width - paddingRight)) / data.length +
                    barWidth / 2} y={80-baseHeight / 4 + i * barWidth} rx={barRadius} width={barHeight} height={(Math.abs(barWidth) / 4) * 3} fill={withCustomBarColorFromData
                    ? "url(#customColor_0_" + i + ")"
                    : "url(#fillShadowGradientFrom)"}/>);
            });
        };
        _this.renderBarTops = function (_a) {
            var data = _a.data, width = _a.width, height = _a.height, paddingTop = _a.paddingTop, paddingRight = _a.paddingRight, transform = _a.transform;
            var baseHeight = _this.calcBaseHeight(data, height);
            return data.map(function (x, i) {
                var barHeight = _this.calcHeight(x, data, height);
                var barWidth = 32 * _this.getBarPercentage();
                return (<Rect key={Math.random()} x={paddingRight +
                    (i * (width - paddingRight)) / data.length +
                    barWidth / 2} y={((baseHeight - barHeight) / 4) * 3 + paddingTop} width={barWidth} height={2} fill={_this.props.chartConfig.color(0.6)}/>);
            });
        };
        _this.renderColors = function (_a) {
            var data = _a.data, flatColor = _a.flatColor;
            return data.map(function (dataset, index) {
                var _a, _b;
                return (<Defs key={(_a = dataset.key) !== null && _a !== void 0 ? _a : index}>
        {(_b = dataset.colors) === null || _b === void 0 ? void 0 : _b.map(function (color, colorIndex) {
                    var highOpacityColor = color(1.0);
                    var lowOpacityColor = color(0.1);
                    return (<LinearGradient id={"customColor_" + index + "_" + colorIndex} key={index + "_" + colorIndex} x1={0} y1={0} x2={0} y2={1}>
              <Stop offset="0" stopColor={highOpacityColor} stopOpacity="1"/>
              {flatColor ? (<Stop offset="1" stopColor={highOpacityColor} stopOpacity="1"/>) : (<Stop offset="1" stopColor={lowOpacityColor} stopOpacity="0"/>)}
            </LinearGradient>);
                })}
      </Defs>);
            });
        };
        _this.renderValuesOnTopOfBars = function (_a) {
            var data = _a.data, width = _a.width, height = _a.height, paddingTop = 15+_a.paddingTop, paddingRight = _a.paddingRight;
            var baseHeight = _this.calcBaseHeight(data, height);
            
            var renderLabel = function (value) {
                if (_this.props.chartConfig.formatTopBarValue) {
                    return _this.props.chartConfig.formatTopBarValue(value);
                }
                else {
                    return value;
                }
            };
            return data.map(function (x, i) {
                var barHeight = _this.calcHeight(x, data, height);
                var barWidth = 32 * _this.getBarPercentage();

                return (
                    
                <>
                    <Text key={Math.random()} x={barHeight+1.2*paddingRight +(0* (width -paddingRight)) / data.length +barHeight*0.} y={80-baseHeight / 4 + i * barWidth+17} fill={_this.props.chartConfig.color(0.6)} fontSize="15" textAnchor="middle">
                        {renderLabel(data[i])}
                    </Text>

                    <Image x={25+barHeight+paddingRight +(0* (width - paddingRight)) / data.length +barHeight*0.} y={80-baseHeight / 4 + i * barWidth} width={dimensions.bodyWidth *0.08} height={dimensions.bodyHeight * 0.05} href={data.photos} clipPath="url(#clip)"/>
                </>
                );
            });
        };
        return _this;
    }
    BarChart.prototype.render = function () {
        var _a;
        var _b = this.props, width = _b.width, height = _b.height, data = _b.data, _c = _b.style, style = _c === void 0 ? {} : _c, _d = _b.withHorizontalLabels, withHorizontalLabels = _d === void 0 ? true : _d, _e = _b.withVerticalLabels, withVerticalLabels = _e === void 0 ? true : _e, _f = _b.verticalLabelRotation, verticalLabelRotation = _f === void 0 ? 0 : _f, _g = _b.horizontalLabelRotation, horizontalLabelRotation = _g === void 0 ? 0 : _g, _h = _b.withInnerLines, withInnerLines = _h === void 0 ? true : _h, _j = _b.showBarTops, showBarTops = _j === void 0 ? true : _j, _k = _b.withCustomBarColorFromData, withCustomBarColorFromData = _k === void 0 ? false : _k, _l = _b.showValuesOnTopOfBars, showValuesOnTopOfBars = _l === void 0 ? false : _l, _m = _b.flatColor, flatColor = _m === void 0 ? false : _m, _o = _b.segments, segments = _o === void 0 ? 4 : _o;
        var _p = style.borderRadius, borderRadius = _p === void 0 ? 0 : _p, _q = style.paddingTop, paddingTop = _q === void 0 ? 16 : _q, _r = style.paddingRight, paddingRight = _r === void 0 ? 64 : _r;
        var config = {
            width: width,
            height: height,
            verticalLabelRotation: verticalLabelRotation,
            horizontalLabelRotation: horizontalLabelRotation,
            barRadius: (this.props.chartConfig && this.props.chartConfig.barRadius) || 0,
            decimalPlaces: (_a = (this.props.chartConfig && this.props.chartConfig.decimalPlaces)) !== null && _a !== void 0 ? _a : 2,
            formatYLabel: (this.props.chartConfig && this.props.chartConfig.formatYLabel) ||
                function (label) {
                    return label;
                },
            formatXLabel: (this.props.chartConfig && this.props.chartConfig.formatXLabel) ||
                function (label) {
                    return label;
                }
        };
        return (<View style={style}>
        <Svg height={height} width={width}>
          {this.renderDefs(__assign(__assign({}, config), this.props.chartConfig))}
          {this.renderColors(__assign(__assign({}, this.props.chartConfig), { flatColor: flatColor, data: this.props.data.datasets }))}
          <Rect width="100%" height={height} rx={borderRadius} ry={borderRadius} fill="url(#backgroundGradient)"/>
          <G>
            {withInnerLines
            ? this.renderHorizontalLines(__assign(__assign({}, config), { count: segments, paddingTop: paddingTop }))
            : null}
          </G>
          <G rotation="90" origin="-3, 180">
            {withHorizontalLabels
            ? this.renderHorizontalLabels(__assign(__assign({}, config), { count: segments-1, data: data.datasets[0].data, paddingTop: paddingTop-115, paddingRight: paddingRight,  }))
            : null}
          </G>
          <G>
            {withVerticalLabels
            ? this.renderVerticalLabels(__assign(__assign({}, config), { labels: data.labels, paddingRight: paddingRight, paddingTop: paddingTop, horizontalOffset: barWidth * this.getBarPercentage() }))
            : null}
          </G>
          <G>
            {this.renderBars(__assign(__assign({}, config), { data: data.datasets[0].data, paddingTop: paddingTop, paddingRight: paddingRight, withCustomBarColorFromData: withCustomBarColorFromData }))}
          </G>
          <G>
            {showValuesOnTopOfBars &&
            this.renderValuesOnTopOfBars(__assign(__assign({}, config), { data: data.datasets[0].data, paddingTop: paddingTop, paddingRight: paddingRight, transform: [{ rotate: '90deg'}] }))}
          </G>
          <G>
            {showBarTops &&
            this.renderBarTops(__assign(__assign({}, config), { data: data.datasets[0].data, paddingTop: paddingTop, paddingRight: paddingRight }))}
          </G>
        </Svg>
      </View>);
    };
    return BarChart;
}(AbstractChart));
export default BarChart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyQ2hhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvQmFyQ2hhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsSUFBSSxFQUFhLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFDTCxJQUFJLEVBQ0osQ0FBQyxFQUNELGNBQWMsRUFDZCxJQUFJLEVBQ0osSUFBSSxFQUNKLEdBQUcsRUFDSCxJQUFJLEVBQ0wsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQixPQUFPLGFBR04sTUFBTSxpQkFBaUIsQ0FBQztBQUd6QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFtQ3BCO0lBQXVCLDRCQUEyQztJQUFsRTtRQUFBLHFFQThSQztRQTdSQyxzQkFBZ0IsR0FBRztZQUNULElBQUEsS0FBc0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLGNBQTNCLEVBQWpCLGFBQWEsbUJBQUcsQ0FBQyxLQUFBLENBQTRCO1lBQ3JELE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUVGLGdCQUFVLEdBQUcsVUFBQyxFQWNiO2dCQWJDLElBQUksVUFBQSxFQUNKLEtBQUssV0FBQSxFQUNMLE1BQU0sWUFBQSxFQUNOLFVBQVUsZ0JBQUEsRUFDVixZQUFZLGtCQUFBLEVBQ1osU0FBUyxlQUFBLEVBQ1QsMEJBQTBCLGdDQUFBO1lBUTFCLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRXJELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNuQixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELElBQU0sUUFBUSxHQUFHLEVBQUUs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Q0FBQyxDQUNIO1VBQUEsQ0FBQyxDQUFDLENBQ0E7WUFBQSxDQUFDLHFCQUFxQjtZQUNwQixJQUFJLENBQUMsdUJBQXVCLHVCQUN2QixNQUFNLEtBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUMzQixVQUFVLEVBQUUsVUFBb0IsRUFDaEMsWUFBWSxFQUFFLFlBQXNCLElBQ3BDLENBQ047VUFBQSxFQUFFLENBQUMsQ0FDSDtVQUFBLENBQUMsQ0FBQyxDQUNBO1lBQUEsQ0FBQyxXQUFXO1lBQ1YsSUFBSSxDQUFDLGFBQWEsdUJBQ2IsTUFBTSxLQUNULElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDM0IsVUFBVSxFQUFFLFVBQW9CLEVBQ2hDLFlBQVksRUFBRSxZQUFzQixJQUNwQyxDQUNOO1VBQUEsRUFBRSxDQUFDLENBQ0w7UUFBQSxFQUFFLEdBQUcsQ0FDUDtNQUFBLEVBQUUsSUFBSSxDQUFDLENBQ1IsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQTlSRCxDQUF1QixhQUFhLEdBOFJuQztBQUVELGVBQWUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlldywgVmlld1N0eWxlIH0gZnJvbSBcInJlYWN0LW5hdGl2ZVwiO1xuaW1wb3J0IHtcbiAgRGVmcyxcbiAgRyxcbiAgTGluZWFyR3JhZGllbnQsXG4gIFJlY3QsXG4gIFN0b3AsXG4gIFN2ZyxcbiAgVGV4dFxufSBmcm9tIFwicmVhY3QtbmF0aXZlLXN2Z1wiO1xuXG5pbXBvcnQgQWJzdHJhY3RDaGFydCwge1xuICBBYnN0cmFjdENoYXJ0Q29uZmlnLFxuICBBYnN0cmFjdENoYXJ0UHJvcHNcbn0gZnJvbSBcIi4vQWJzdHJhY3RDaGFydFwiO1xuaW1wb3J0IHsgQ2hhcnREYXRhIH0gZnJvbSBcIi4vSGVscGVyVHlwZXNcIjtcblxuY29uc3QgYmFyV2lkdGggPSAzMjtcblxuZXhwb3J0IGludGVyZmFjZSBCYXJDaGFydFByb3BzIGV4dGVuZHMgQWJzdHJhY3RDaGFydFByb3BzIHtcbiAgZGF0YTogQ2hhcnREYXRhO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgZnJvbVplcm8/OiBib29sZWFuO1xuICB3aXRoSW5uZXJMaW5lcz86IGJvb2xlYW47XG4gIHlBeGlzTGFiZWw6IHN0cmluZztcbiAgeUF4aXNTdWZmaXg6IHN0cmluZztcbiAgY2hhcnRDb25maWc6IEFic3RyYWN0Q2hhcnRDb25maWc7XG4gIHN0eWxlPzogUGFydGlhbDxWaWV3U3R5bGU+O1xuICBob3Jpem9udGFsTGFiZWxSb3RhdGlvbj86IG51bWJlcjtcbiAgdmVydGljYWxMYWJlbFJvdGF0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogU2hvdyB2ZXJ0aWNhbCBsYWJlbHMgLSBkZWZhdWx0OiBUcnVlLlxuICAgKi9cbiAgd2l0aFZlcnRpY2FsTGFiZWxzPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFNob3cgaG9yaXpvbnRhbCBsYWJlbHMgLSBkZWZhdWx0OiBUcnVlLlxuICAgKi9cbiAgd2l0aEhvcml6b250YWxMYWJlbHM/OiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBob3Jpem9udGFsIGxpbmVzXG4gICAqL1xuICBzZWdtZW50cz86IG51bWJlcjtcbiAgc2hvd0JhclRvcHM/OiBib29sZWFuO1xuICBzaG93VmFsdWVzT25Ub3BPZkJhcnM/OiBib29sZWFuO1xuICB3aXRoQ3VzdG9tQmFyQ29sb3JGcm9tRGF0YT86IGJvb2xlYW47XG4gIGZsYXRDb2xvcj86IGJvb2xlYW47XG4gIFxufVxuXG50eXBlIEJhckNoYXJ0U3RhdGUgPSB7fTtcblxuY2xhc3MgQmFyQ2hhcnQgZXh0ZW5kcyBBYnN0cmFjdENoYXJ0PEJhckNoYXJ0UHJvcHMsIEJhckNoYXJ0U3RhdGU+IHtcbiAgZ2V0QmFyUGVyY2VudGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGJhclBlcmNlbnRhZ2UgPSAxIH0gPSB0aGlzLnByb3BzLmNoYXJ0Q29uZmlnO1xuICAgIHJldHVybiBiYXJQZXJjZW50YWdlO1xuICB9O1xuXG4gIHJlbmRlckJhcnMgPSAoe1xuICAgIGRhdGEsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHBhZGRpbmdUb3AsXG4gICAgcGFkZGluZ1JpZ2h0LFxuICAgIGJhclJhZGl1cyxcbiAgICB3aXRoQ3VzdG9tQmFyQ29sb3JGcm9tRGF0YVxuICB9OiBQaWNrPFxuICAgIE9taXQ8QWJzdHJhY3RDaGFydENvbmZpZywgXCJkYXRhXCI+LFxuICAgIFwid2lkdGhcIiB8IFwiaGVpZ2h0XCIgfCBcInBhZGRpbmdSaWdodFwiIHwgXCJwYWRkaW5nVG9wXCIgfCBcImJhclJhZGl1c1wiXG4gID4gJiB7XG4gICAgZGF0YTogbnVtYmVyW107XG4gICAgd2l0aEN1c3RvbUJhckNvbG9yRnJvbURhdGE6IGJvb2xlYW47XG4gIH0pID0+IHtcbiAgICBjb25zdCBiYXNlSGVpZ2h0ID0gdGhpcy5jYWxjQmFzZUhlaWdodChkYXRhLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIGRhdGEubWFwKCh4LCBpKSA9PiB7XG4gICAgICBjb25zdCBiYXJIZWlnaHQgPSB0aGlzLmNhbGNIZWlnaHQoeCwgZGF0YSwgaGVpZ2h0KTtcbiAgICAgIGNvbnN0IGJhcldpZHRoID0gMzIgKiB0aGlzLmdldEJhclBlcmNlbnRhZ2UoKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSZWN0XG4gICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxuICAgICAgICAgIHg9e1xuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0ICtcbiAgICAgICAgICAgIChpICogKHdpZHRoIC0gcGFkZGluZ1JpZ2h0KSkgLyBkYXRhLmxlbmd0aCArXG4gICAgICAgICAgICBiYXJXaWR0aCAvIDJcbiAgICAgICAgICB9XG4gICAgICAgICAgeT17XG4gICAgICAgICAgICAoKGJhckhlaWdodCA+IDAgPyBiYXNlSGVpZ2h0IC0gYmFySGVpZ2h0IDogYmFzZUhlaWdodCkgLyA0KSAqIDMgK1xuICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgIH1cbiAgICAgICAgICByeD17YmFyUmFkaXVzfVxuICAgICAgICAgIHdpZHRoPXtiYXJXaWR0aH1cbiAgICAgICAgICBoZWlnaHQ9eyhNYXRoLmFicyhiYXJIZWlnaHQpIC8gNCkgKiAzfVxuICAgICAgICAgIGZpbGw9e1xuICAgICAgICAgICAgd2l0aEN1c3RvbUJhckNvbG9yRnJvbURhdGFcbiAgICAgICAgICAgICAgPyBgdXJsKCNjdXN0b21Db2xvcl8wXyR7aX0pYFxuICAgICAgICAgICAgICA6IFwidXJsKCNmaWxsU2hhZG93R3JhZGllbnRGcm9tKVwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXJCYXJUb3BzID0gKHtcbiAgICBkYXRhLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBwYWRkaW5nVG9wLFxuICAgIHBhZGRpbmdSaWdodFxuICB9OiBQaWNrPFxuICAgIE9taXQ8QWJzdHJhY3RDaGFydENvbmZpZywgXCJkYXRhXCI+LFxuICAgIFwid2lkdGhcIiB8IFwiaGVpZ2h0XCIgfCBcInBhZGRpbmdSaWdodFwiIHwgXCJwYWRkaW5nVG9wXCJcbiAgPiAmIHtcbiAgICBkYXRhOiBudW1iZXJbXTtcbiAgfSkgPT4ge1xuICAgIGNvbnN0IGJhc2VIZWlnaHQgPSB0aGlzLmNhbGNCYXNlSGVpZ2h0KGRhdGEsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gZGF0YS5tYXAoKHgsIGkpID0+IHtcbiAgICAgIGNvbnN0IGJhckhlaWdodCA9IHRoaXMuY2FsY0hlaWdodCh4LCBkYXRhLCBoZWlnaHQpO1xuICAgICAgY29uc3QgYmFyV2lkdGggPSAzMiAqIHRoaXMuZ2V0QmFyUGVyY2VudGFnZSgpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlY3RcbiAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XG4gICAgICAgICAgeD17XG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQgK1xuICAgICAgICAgICAgKGkgKiAod2lkdGggLSBwYWRkaW5nUmlnaHQpKSAvIGRhdGEubGVuZ3RoICtcbiAgICAgICAgICAgIGJhcldpZHRoIC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgICB5PXsoKGJhc2VIZWlnaHQgLSBiYXJIZWlnaHQpIC8gNCkgKiAzICsgcGFkZGluZ1RvcH1cbiAgICAgICAgICB3aWR0aD17YmFyV2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXsyfVxuICAgICAgICAgIGZpbGw9e3RoaXMucHJvcHMuY2hhcnRDb25maWcuY29sb3IoMC42KX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ29sb3JzID0gKHtcbiAgICBkYXRhLFxuICAgIGZsYXRDb2xvclxuICB9OiBQaWNrPEFic3RyYWN0Q2hhcnRDb25maWcsIFwiZGF0YVwiPiAmIHtcbiAgICBmbGF0Q29sb3I6IGJvb2xlYW47XG4gIH0pID0+IHtcbiAgICByZXR1cm4gZGF0YS5tYXAoKGRhdGFzZXQsIGluZGV4KSA9PiAoXG4gICAgICA8RGVmcyBrZXk9e2RhdGFzZXQua2V5ID8/IGluZGV4fT5cbiAgICAgICAge2RhdGFzZXQuY29sb3JzPy5tYXAoKGNvbG9yLCBjb2xvckluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaGlnaE9wYWNpdHlDb2xvciA9IGNvbG9yKDEuMCk7XG4gICAgICAgICAgY29uc3QgbG93T3BhY2l0eUNvbG9yID0gY29sb3IoMC4xKTtcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgaWQ9e2BjdXN0b21Db2xvcl8ke2luZGV4fV8ke2NvbG9ySW5kZXh9YH1cbiAgICAgICAgICAgICAga2V5PXtgJHtpbmRleH1fJHtjb2xvckluZGV4fWB9XG4gICAgICAgICAgICAgIHgxPXswfVxuICAgICAgICAgICAgICB5MT17MH1cbiAgICAgICAgICAgICAgeDI9ezB9XG4gICAgICAgICAgICAgIHkyPXsxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RvcCBvZmZzZXQ9XCIwXCIgc3RvcENvbG9yPXtoaWdoT3BhY2l0eUNvbG9yfSBzdG9wT3BhY2l0eT1cIjFcIiAvPlxuICAgICAgICAgICAgICB7ZmxhdENvbG9yID8gKFxuICAgICAgICAgICAgICAgIDxTdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9e2hpZ2hPcGFjaXR5Q29sb3J9IHN0b3BPcGFjaXR5PVwiMVwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8U3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPXtsb3dPcGFjaXR5Q29sb3J9IHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0RlZnM+XG4gICAgKSk7XG4gIH07XG5cbiAgcmVuZGVyVmFsdWVzT25Ub3BPZkJhcnMgPSAoe1xuICAgIGRhdGEsXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHBhZGRpbmdUb3AsXG4gICAgcGFkZGluZ1JpZ2h0XG4gIH06IFBpY2s8XG4gICAgT21pdDxBYnN0cmFjdENoYXJ0Q29uZmlnLCBcImRhdGFcIj4sXG4gICAgXCJ3aWR0aFwiIHwgXCJoZWlnaHRcIiB8IFwicGFkZGluZ1JpZ2h0XCIgfCBcInBhZGRpbmdUb3BcIlxuICA+ICYge1xuICAgIGRhdGE6IG51bWJlcltdO1xuICB9KSA9PiB7XG4gICAgY29uc3QgYmFzZUhlaWdodCA9IHRoaXMuY2FsY0Jhc2VIZWlnaHQoZGF0YSwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbmRlckxhYmVsID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmKHRoaXMucHJvcHMuY2hhcnRDb25maWcuZm9ybWF0VG9wQmFyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hhcnRDb25maWcuZm9ybWF0VG9wQmFyVmFsdWUodmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgY29uc3QgYmFySGVpZ2h0ID0gdGhpcy5jYWxjSGVpZ2h0KHgsIGRhdGEsIGhlaWdodCk7XG4gICAgICBjb25zdCBiYXJXaWR0aCA9IDMyICogdGhpcy5nZXRCYXJQZXJjZW50YWdlKCk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICB4PXtcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodCArXG4gICAgICAgICAgICAoaSAqICh3aWR0aCAtIHBhZGRpbmdSaWdodCkpIC8gZGF0YS5sZW5ndGggK1xuICAgICAgICAgICAgYmFyV2lkdGggLyAxXG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgeT17KChiYXNlSGVpZ2h0IC0gYmFySGVpZ2h0KSAvIDQpICogMyArIHBhZGRpbmdUb3AgLSAxfVxuICAgICAgICAgIGZpbGw9e3RoaXMucHJvcHMuY2hhcnRDb25maWcuY29sb3IoMC42KX1cbiAgICAgICAgICBmb250U2l6ZT1cIjEyXCJcbiAgICAgICAgICB0ZXh0QW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJMYWJlbChkYXRhW2ldKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBkYXRhLFxuICAgICAgc3R5bGUgPSB7fSxcbiAgICAgIHdpdGhIb3Jpem9udGFsTGFiZWxzID0gdHJ1ZSxcbiAgICAgIHdpdGhWZXJ0aWNhbExhYmVscyA9IHRydWUsXG4gICAgICB2ZXJ0aWNhbExhYmVsUm90YXRpb24gPSAwLFxuICAgICAgaG9yaXpvbnRhbExhYmVsUm90YXRpb24gPSAwLFxuICAgICAgd2l0aElubmVyTGluZXMgPSB0cnVlLFxuICAgICAgc2hvd0JhclRvcHMgPSB0cnVlLFxuICAgICAgd2l0aEN1c3RvbUJhckNvbG9yRnJvbURhdGEgPSBmYWxzZSxcbiAgICAgIHNob3dWYWx1ZXNPblRvcE9mQmFycyA9IGZhbHNlLFxuICAgICAgZmxhdENvbG9yID0gZmFsc2UsXG4gICAgICBzZWdtZW50cyA9IDRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgYm9yZGVyUmFkaXVzID0gMCwgcGFkZGluZ1RvcCA9IDE2LCBwYWRkaW5nUmlnaHQgPSA2NCB9ID0gc3R5bGU7XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHZlcnRpY2FsTGFiZWxSb3RhdGlvbixcbiAgICAgIGhvcml6b250YWxMYWJlbFJvdGF0aW9uLFxuICAgICAgYmFyUmFkaXVzOlxuICAgICAgICAodGhpcy5wcm9wcy5jaGFydENvbmZpZyAmJiB0aGlzLnByb3BzLmNoYXJ0Q29uZmlnLmJhclJhZGl1cykgfHwgMCxcbiAgICAgIGRlY2ltYWxQbGFjZXM6XG4gICAgICAgICh0aGlzLnByb3BzLmNoYXJ0Q29uZmlnICYmIHRoaXMucHJvcHMuY2hhcnRDb25maWcuZGVjaW1hbFBsYWNlcykgPz8gMixcbiAgICAgIGZvcm1hdFlMYWJlbDpcbiAgICAgICAgKHRoaXMucHJvcHMuY2hhcnRDb25maWcgJiYgdGhpcy5wcm9wcy5jaGFydENvbmZpZy5mb3JtYXRZTGFiZWwpIHx8XG4gICAgICAgIGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSxcbiAgICAgIGZvcm1hdFhMYWJlbDpcbiAgICAgICAgKHRoaXMucHJvcHMuY2hhcnRDb25maWcgJiYgdGhpcy5wcm9wcy5jaGFydENvbmZpZy5mb3JtYXRYTGFiZWwpIHx8XG4gICAgICAgIGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPFN2ZyBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZzKHtcbiAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY2hhcnRDb25maWdcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDb2xvcnMoe1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jaGFydENvbmZpZyxcbiAgICAgICAgICAgIGZsYXRDb2xvcjogZmxhdENvbG9yLFxuICAgICAgICAgICAgZGF0YTogdGhpcy5wcm9wcy5kYXRhLmRhdGFzZXRzXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPFJlY3RcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIHJ4PXtib3JkZXJSYWRpdXN9XG4gICAgICAgICAgICByeT17Ym9yZGVyUmFkaXVzfVxuICAgICAgICAgICAgZmlsbD1cInVybCgjYmFja2dyb3VuZEdyYWRpZW50KVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rz5cbiAgICAgICAgICAgIHt3aXRoSW5uZXJMaW5lc1xuICAgICAgICAgICAgICA/IHRoaXMucmVuZGVySG9yaXpvbnRhbExpbmVzKHtcbiAgICAgICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAgICAgY291bnQ6IHNlZ21lbnRzLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvRz5cbiAgICAgICAgICA8Rz5cbiAgICAgICAgICAgIHt3aXRoSG9yaXpvbnRhbExhYmVsc1xuICAgICAgICAgICAgICA/IHRoaXMucmVuZGVySG9yaXpvbnRhbExhYmVscyh7XG4gICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgIGNvdW50OiBzZWdtZW50cyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGFzZXRzWzBdLmRhdGEsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1RvcCBhcyBudW1iZXIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmlnaHQgYXMgbnVtYmVyXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0c+XG4gICAgICAgICAgPEc+XG4gICAgICAgICAgICB7d2l0aFZlcnRpY2FsTGFiZWxzXG4gICAgICAgICAgICAgID8gdGhpcy5yZW5kZXJWZXJ0aWNhbExhYmVscyh7XG4gICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgIGxhYmVsczogZGF0YS5sYWJlbHMsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmlnaHQgYXMgbnVtYmVyLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IHBhZGRpbmdUb3AgYXMgbnVtYmVyLFxuICAgICAgICAgICAgICAgIGhvcml6b250YWxPZmZzZXQ6IGJhcldpZHRoICogdGhpcy5nZXRCYXJQZXJjZW50YWdlKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvRz5cbiAgICAgICAgICA8Rz5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckJhcnMoe1xuICAgICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YXNldHNbMF0uZGF0YSxcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1RvcCBhcyBudW1iZXIsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogcGFkZGluZ1JpZ2h0IGFzIG51bWJlcixcbiAgICAgICAgICAgICAgd2l0aEN1c3RvbUJhckNvbG9yRnJvbURhdGE6IHdpdGhDdXN0b21CYXJDb2xvckZyb21EYXRhXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0c+XG4gICAgICAgICAgPEc+XG4gICAgICAgICAgICB7c2hvd1ZhbHVlc09uVG9wT2ZCYXJzICYmXG4gICAgICAgICAgICAgIHRoaXMucmVuZGVyVmFsdWVzT25Ub3BPZkJhcnMoe1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGFzZXRzWzBdLmRhdGEsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1RvcCBhcyBudW1iZXIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmlnaHQgYXMgbnVtYmVyXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvRz5cbiAgICAgICAgICA8Rz5cbiAgICAgICAgICAgIHtzaG93QmFyVG9wcyAmJlxuICAgICAgICAgICAgICB0aGlzLnJlbmRlckJhclRvcHMoe1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGFzZXRzWzBdLmRhdGEsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogcGFkZGluZ1RvcCBhcyBudW1iZXIsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBwYWRkaW5nUmlnaHQgYXMgbnVtYmVyXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvRz5cbiAgICAgICAgPC9Tdmc+XG4gICAgICA8L1ZpZXc+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDtcbiJdfQ==