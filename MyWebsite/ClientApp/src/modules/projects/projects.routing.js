"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projects_component_1 = require("./projects/projects.component");
var csv_to_map_component_1 = require("./csv-to-map/csv-to-map.component");
var comms_service_component_1 = require("./comms-service/comms-service.component");
var epilepsy_diary_component_1 = require("./epilepsy-diary/epilepsy-diary.component");
var umbraco8_component_1 = require("./umbraco8/umbraco8.component");
var devop_stats_component_1 = require("./devop-stats/devop-stats.component");
exports.PROJECT_ROUTES = [
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'devop-stats', component: devop_stats_component_1.DevOpStatsComponent },
    { path: 'csv-to-map', component: csv_to_map_component_1.CsvToMapComponent },
    { path: 'comms-service', component: comms_service_component_1.CommsServiceComponent },
    { path: 'epilepsy-diary', component: epilepsy_diary_component_1.EpilepsyDiaryComponent },
    { path: 'umbraco8', component: umbraco8_component_1.Umbraco8Component }
];
//# sourceMappingURL=projects.routing.js.map