export const mapa1 = {
  layergroupid: "806cc9ba1ce4e97d3ae64474b96327ee:1529255413211",
  metadata: {
    layers: [
      {
        type: "mapnik",
        id: "layer0",
        meta: {
          cartocss:
            "#gadm28_countries { polygon-fill: #bbbbbb; polygon-opacity: 1; line-color: #FFFFFF; line-width: 0.5; line-opacity: 0.5; }",
          stats: { estimatedFeatureCount: 256 },
          cartocss_meta: { rules: [] }
        },
        tilejson: {
          vector: {
            tilejson: "2.2.0",
            tiles: [
              "https://cartocdn-gusc-a.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.mvt",
              "https://cartocdn-gusc-b.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.mvt",
              "https://cartocdn-gusc-c.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.mvt",
              "https://cartocdn-gusc-d.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.mvt"
            ]
          },
          raster: {
            tilejson: "2.2.0",
            tiles: [
              "https://cartocdn-gusc-a.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.png",
              "https://cartocdn-gusc-b.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.png",
              "https://cartocdn-gusc-c.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.png",
              "https://cartocdn-gusc-d.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/layer0/{z}/{x}/{y}.png"
            ]
          }
        }
      }
    ],
    dataviews: {},
    analyses: [],
    tilejson: {
      vector: {
        tilejson: "2.2.0",
        tiles: [
          "https://cartocdn-gusc-a.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.mvt",
          "https://cartocdn-gusc-b.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.mvt",
          "https://cartocdn-gusc-c.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.mvt",
          "https://cartocdn-gusc-d.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.mvt"
        ]
      },
      raster: {
        tilejson: "2.2.0",
        tiles: [
          "https://cartocdn-gusc-a.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.png",
          "https://cartocdn-gusc-b.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.png",
          "https://cartocdn-gusc-c.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.png",
          "https://cartocdn-gusc-d.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.png"
        ]
      }
    },
    url: {
      vector: {
        urlTemplate:
          "https://cartocdn-gusc-{s}.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.mvt",
        subdomains: ["a", "b", "c", "d"]
      },
      raster: {
        urlTemplate:
          "https://cartocdn-gusc-{s}.global.ssl.fastly.net/wri-01/api/v1/map/806cc9ba1ce4e97d3ae64474b96327ee:1529255413211/{z}/{x}/{y}.png",
        subdomains: ["a", "b", "c", "d"]
      }
    }
  },
  cdn_url: {
    templates: {
      http: {
        subdomains: ["0", "1", "2", "3"],
        url: "http://{s}.gusc.cartocdn.com"
      },
      https: {
        subdomains: ["a", "b", "c", "d"],
        url: "https://cartocdn-gusc-{s}.global.ssl.fastly.net"
      }
    },
    http: "gusc.cartocdn.com",
    https: "cartocdn-gusc.global.ssl.fastly.net"
  },
  last_updated: "2018-06-17T17:10:13.211Z"
};
export const mapa2 = {
  data: [
    {
      id: "0ac7bf69-388a-48b0-a869-c3240031c4bf",
      type: "layer",
      attributes: {
        name: "Acute Food Insecurity",
        slug: "acute-food-insecurity-waiting-for-fews-pulse",
        dataset: "223b936e-06b8-4970-abd9-4f123904d95d",
        description: "Levels of acute food insecurity in the last year.",
        application: ["rw"],
        iso: [],
        provider: "cartodb",
        userId: "58f63c81bd32c60206ed6b12",
        default: false,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          pulseConfig: {
            type: "imageOverlay",
            sql:
              "select  * from foo_003_fews_net_food_insecurity where start_date > (CURRENT_DATE - interval '50 day') and ifc_type='ML2'"
          },
          body: {
            layers: [
              {
                options: {
                  cartocss_version: "2.3.0",
                  cartocss:
                    "#layer {polygon-fill: transparent; polygon-opacity: 0.2; line-width: 1; line-color: transparent; line-opacity: 0.2; [ifc=0]{ polygon-fill: #ffffb2; line-color: #ffffb2;} [ifc=1]{ polygon-fill: #fecc5c; line-color: #fecc5c;} [ifc=2]{ polygon-fill: #fd8d3c; line-color: #fd8d3c;} [ifc=3]{ polygon-fill: #f03b20; line-color: #f03b20;} [ifc=4]{ polygon-fill: #bd0026; line-color: #bd0026;} [ifc=66]{ polygon-fill: #49a5c7; line-color: #49a5c7;} [ifc=88]{ polygon-fill: #134612; line-color: #134612;} [ifc=99]{ polygon-fill: #d2d9d6; line-color: #d2d9d6;}}",
                  sql:
                    "select * from foo_003_fews_net_food_insecurity where start_date > (CURRENT_DATE - interval '360 day')"
                },
                type: "mapnik"
              }
            ],
            maxzoom: 18
          },
          account: "rw-nrt"
        },
        legendConfig: {
          items: [
            {
              color: "#ffffb2",
              name: "None/Minimal"
            },
            {
              color: "#fecc5c",
              name: "Stressed"
            },
            {
              color: "#fd8d3c",
              name: "Crisis"
            },
            {
              color: "#f03b20",
              name: "Emergency"
            },
            {
              color: "#bd0026",
              name: "Humanitarian Catastrophe/Famine"
            }
          ],
          type: "choropleth"
        },
        interactionConfig: {
          type: "intersection",
          pulseConfig: {
            url:
              'https://api.resourcewatch.org/v1/query/223b936e-06b8-4970-abd9-4f123904d95d?sql=select * from foo_003_fews_net_food_insecurity WHERE start_date > (CURRENT_DATE - interval \'360 day\') and st_intersects(the_geom,st_buffer(ST_SetSRID(st_geomfromgeojson(\'{"type":"Point","coordinates":{{point}}}\'),4326),1))'
          },
          config: {
            url:
              'https://api.resourcewatch.org/v1/query/223b936e-06b8-4970-abd9-4f123904d95d?sql=select * from foo_003_fews_net_food_insecurity WHERE start_date > (CURRENT_DATE - interval \'360 day\') and st_intersects(the_geom,st_buffer(ST_SetSRID(st_geomfromgeojson(\'{"type":"Point","coordinates":{{point}}}\'),4326),1))'
          },
          output: [
            {
              column: "ifc",
              property: "Value",
              type: "string",
              format: null
            },
            {
              column: "ifc_type",
              property: "Type",
              type: "string",
              format: null
            },
            {
              column: "start_date",
              property: "start date",
              type: "date",
              format: "YYYY-MM-DD"
            }
          ]
        },
        applicationConfig: {
          "config one": {
            type: "lorem",
            from: {
              data: "table"
            }
          }
        },
        staticImageConfig: {
          format: "png",
          bbox: [-110, -65, 110, 65],
          width: 2048,
          height: 1024,
          srs: null,
          urlTemplate:
            "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
        },
        updatedAt: "2018-04-06T14:18:58.989Z"
      }
    },
    {
      id: "1002c7f6-78f7-4fde-a8c3-ba8f8abf2b7f",
      type: "layer",
      attributes: {
        name: "PM 10 Air Quality Measurements (µg/m³)",
        slug: "open-air-quality-pm10",
        dataset: "f84b559f-1eb1-43f2-871f-93fea669bf93",
        description:
          "Measure of PM10 parameter in µg/m³.  Record of official, stationary, outdoor air quality measurements in 2017 reported by government entities or international organizations.",
        application: ["rw"],
        iso: ["global"],
        provider: "cartodb",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          account: "wri-rw",
          body: {
            maxzoom: 18,
            minzoom: 3,
            layers: [
              {
                options: {
                  cartocss_version: "2.3.0",
                  cartocss:
                    "#layer {marker-width: 3;marker-fill-opacity: 1;marker-allow-overlap: true;marker-line-width: 0;marker-line-color: #FFF; marker-line-opacity: 1;[zoom > 2] {marker-width: 3;} [zoom > 3] {marker-width: 4;}[zoom > 5] {marker-width: 7;} [zoom > 7] {marker-width: 12;} [zoom > 9] {marker-width: 15;}}[value >=244]{ marker-fill:#D93127; }[value>=214][value<244]  { marker-fill: #F36D3C;}[value>=183][value<214] { marker-fill: #FAAD5B;} [value>=153][value<183]{ marker-fill:#F6E19E;} [value>=122][value<153]{ marker-fill:#E3F0D9; }[value>=92][value<122]{ marker-fill:#BFE6EC;} [value>=61][value<92]{ marker-fill:#8FD4D9;}[value>=31][value<61]{ marker-fill:#21B5BB;}[value<31] { marker-fill:#0B75A9;} ",
                  sql:
                    "SELECT the_geom_webmercator, lastupdate, parameter, sourcename, unit, value, country, city, location FROM pm2_5_pm10_no2_so2_o3_co_bc_openaq where parameter='pm10' and lastupdate>'2017-01-01'"
                },
                type: "mapnik"
              }
            ]
          },
          pulseConfig: {
            type: "imageOverlay",
            values: {
              format: "png",
              bbox: [-110, -65, 110, 65],
              width: 2048,
              height: 1024
            },
            sql:
              "SELECT st_transform(the_geom_webmercator,32663) as the_geom_webmercator, lastupdate, parameter, sourcename, unit, value, country, city, location FROM pm2_5_pm10_no2_so2_o3_co_bc_openaq where parameter='pm10' and lastupdate>'2017-01-01'",
            urlTemplate:
              "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
          }
        },
        legendConfig: {
          items: [
            {
              color: "#0B75A9",
              value: "Good"
            },
            {
              color: "#8FD4D9",
              value: "Moderate"
            },
            {
              color: "#BFE6EC",
              value: "Unhealthy for Sensitive Groups"
            },
            {
              color: "#F6E19E",
              value: "Unhealthy"
            },
            {
              color: "#F36D3C",
              value: "Very Unhealthy"
            },
            {
              color: "#D93127",
              value: "Hazardous"
            }
          ],
          type: "choropleth"
        },
        interactionConfig: {
          type: "intersection",
          config: {
            url:
              "https://api.resourcewatch.org/v1/query/f84b559f-1eb1-43f2-871f-93fea669bf93?sql=SELECT ST_Transform(the_geom_webmercator, 32663) as the_geom_webmercator,lastupdate, parameter, sourcename, unit, value, country, city, location FROM pm2_5_pm10_no2_so2_o3_co_bc_openaq WHERE parameter='pm10' and lastupdate>'2017-01-01' and (st_intersects(the_geom,st_buffer(ST_SetSRID(st_geomfromgeojson('{\"type\":\"Point\",\"coordinates\":{{point}}}'),4326),1)))"
          },
          pulseConfig: {
            url:
              "https://api.resourcewatch.org/v1/query/f84b559f-1eb1-43f2-871f-93fea669bf93?sql=SELECT lastupdate, parameter, sourcename, unit, value, country, city, location FROM pm2_5_pm10_no2_so2_o3_co_bc_openaq WHERE parameter='pm10' and lastupdate>'2017-01-01' and (st_intersects(the_geom,st_buffer(ST_SetSRID(st_geomfromgeojson('{\"type\":\"Point\",\"coordinates\":{{point}}}'),4326),1)))"
          },
          output: [
            {
              column: "lastupdate",
              property: "Last Update",
              type: "date",
              format: "YYYY"
            },
            {
              column: "parameter",
              property: "Parameter",
              type: "string",
              format: null
            },
            {
              column: "sourcename",
              property: "Source name",
              type: "string",
              format: null
            },
            {
              column: "value",
              property: "Value",
              type: "string",
              format: null
            },
            {
              column: "country",
              property: "Country",
              type: "string",
              format: null
            },
            {
              column: "city",
              property: "City",
              type: "string",
              format: null
            },
            {
              column: "location",
              property: "Location",
              type: "string",
              format: null
            }
          ]
        },
        applicationConfig: {},
        staticImageConfig: {
          format: "png",
          bbox: [-110, -65, 110, 65],
          width: 2048,
          height: 1024,
          srs: null,
          urlTemplate:
            "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
        },
        updatedAt: "2017-10-17T08:46:04.091Z"
      }
    },
    {
      id: "15dd3d92-4d2b-4fc1-83f5-672306dded1f",
      type: "layer",
      attributes: {
        name: "Sea Surface Temperature Anomalies.",
        slug: "sea-surface-temperature-anomalies",
        dataset: "c8040a7a-a40f-48bd-b003-625c33beff5e",
        description: "",
        application: ["rw"],
        iso: ["global"],
        provider: "cartodb",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: false,
        env: "production",
        layerConfig: {
          account: "wri-rw",
          body: {
            maxzoom: 18,
            minzoom: 3,
            layers: [
              {
                type: "mapnik",
                options: {
                  sql: "SELECT * FROM ssta",
                  cartocss:
                    "#ssta {raster-opacity:1; raster-scaling:near; raster-colorizer-default-mode: linear; raster-colorizer-default-color:  transparent; raster-colorizer-epsilon:0.11; raster-colorizer-stops: stop(1, #ff4d4d) stop(140, #FEB24C) stop(200, #fff2cc) stop(220, #C7E9B4) stop(240, #0080ff)}",
                  cartocss_version: "2.3.0",
                  geom_column: "the_raster_webmercator",
                  geom_type: "raster",
                  raster_band: 1
                }
              }
            ]
          }
        },
        legendConfig: {
          type: "gradient",
          items: [
            {
              value: "1",
              color: "#ff4d4d"
            },
            {
              value: "140",
              color: "#FEB24C"
            },
            {
              value: "200",
              color: "#fff2cc"
            },
            {
              value: "220",
              color: "#C7E9B4"
            },
            {
              value: "240",
              color: "#0080ff"
            }
          ]
        },
        interactionConfig: {},
        applicationConfig: {},
        staticImageConfig: {
          format: "png",
          bbox: [-110, -65, 110, 65],
          width: 2048,
          height: 1024,
          srs: null,
          urlTemplate:
            "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
        },
        updatedAt: "2017-06-30T08:39:15.004Z"
      }
    },
    {
      id: "17b9bf19-e116-4a22-b71a-fe67ce7fd552",
      type: "layer",
      attributes: {
        name: "Brazilian Amazon Deforestation Alerts",
        slug: "deforestation-alert-system-sad-alerts-imazon-pulse",
        dataset: "e8f5b4e8-454e-488d-8b4a-b60ad02bce36",
        description: "Zones with deforestation alerts during last 90 days.",
        application: ["rw"],
        iso: ["BRA"],
        provider: "cartodb",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          pulseConfig: {
            type: "imageOverlay",
            sql:
              "SELECT the_geom_webmercator, orig_fname, orig_oid, data_type,round(st_area_sh::numeric,2) as st_area_sh, round(st_length_::numeric,2) as st_length_, date FROM imazon_sad where date > (CURRENT_DATE - interval '120 day')"
          },
          body: {
            layers: [
              {
                options: {
                  cartocss_version: "2.3.0",
                  cartocss:
                    "#imazon_sad{  polygon-fill: #cb1f5e;  polygon-opacity: 1;  line-color: #cb1f5e;  line-width: 1.5;  line-opacity: 1;}",
                  sql:
                    "SELECT the_geom_webmercator, orig_fname, orig_oid, data_type,round(st_area_sh::numeric,2) as st_area_sh, round(st_length_::numeric,2) as st_length_, date FROM imazon_sad"
                },
                type: "cartodb"
              }
            ],
            minzoom: 3,
            maxzoom: 18
          },
          account: "wri-01"
        },
        legendConfig: {
          type: "basic",
          items: [
            {
              name: "Deforestation zones",
              color: "#cb1f5e"
            }
          ]
        },
        interactionConfig: {
          output: [
            {
              format: "0,0",
              type: "number",
              property: "Area",
              column: "st_area_sh",
              suffix: "ha"
            },
            {
              format: "0a",
              type: "number",
              property: "Length",
              column: "st_length_"
            }
          ],
          config: {
            url:
              'https://api.resourcewatch.org/v1/query/e8f5b4e8-454e-488d-8b4a-b60ad02bce36?sql=SELECT st_transform(the_geom_webmercator,32663) as the_geom_webmercator, orig_fname, orig_oid, data_type, round(st_area_sh::numeric,2) as st_area_sh, round(st_length_::numeric,2) as st_length_, date FROM imazon_sad WHERE date > (CURRENT_DATE - interval \'90 day\') and st_intersects(the_geom,st_buffer(ST_SetSRID(st_geomfromgeojson(\'{"type":"Point","coordinates":{{point}}}\'),4326),1))'
          },
          pulseConfig: {
            url:
              'https://api.resourcewatch.org/v1/query/e8f5b4e8-454e-488d-8b4a-b60ad02bce36?sql=SELECT orig_fname, orig_oid, data_type,round(st_area_sh::numeric,2) as st_area_sh, round(st_length_::numeric,2) as st_length_, date FROM imazon_sad WHERE date > (CURRENT_DATE - interval \'90 day\') and st_intersects(the_geom,st_buffer(ST_SetSRID(st_geomfromgeojson(\'{"type":"Point","coordinates":{{point}}}\'),4326),1))'
          },
          type: "intersection"
        },
        applicationConfig: {
          "config one": {
            type: "lorem",
            from: {
              data: "table"
            }
          }
        },
        staticImageConfig: {
          format: "png",
          bbox: [-110, -65, 110, 65],
          width: 2048,
          height: 1024,
          srs: null,
          urlTemplate:
            "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
        },
        updatedAt: "2018-04-06T14:18:39.529Z"
      }
    },
    {
      id: "29ce6221-9450-4b60-a9c2-aea581d31a08",
      type: "layer",
      attributes: {
        name: "Monthly Air Temperature Anomalies.",
        slug: "monthly-air-temperature-anomalies",
        dataset: "9e7dc020-5a93-4df8-b81e-ee3e7bf32764",
        description: "",
        application: ["rw"],
        iso: ["global"],
        provider: "cartodb",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: false,
        env: "production",
        layerConfig: {
          account: "wri-rw",
          body: {
            maxzoom: 18,
            minzoom: 3,
            layers: [
              {
                type: "mapnik",
                options: {
                  sql: "SELECT * FROM air_temo_anomalies",
                  cartocss:
                    "#air_temo_anomalies {raster-opacity:1; raster-scaling:near; raster-colorizer-default-mode: linear; raster-colorizer-default-color:  transparent; raster-colorizer-epsilon:0.11; raster-colorizer-stops: stop(-6, #142462) stop(-3, #a5ddf7) stop(0, #ffffff) stop(3, #fdb93f) stop(6, #910013)}",
                  cartocss_version: "2.3.0",
                  geom_column: "the_raster_webmercator",
                  geom_type: "raster",
                  raster_band: 1
                }
              }
            ]
          }
        },
        legendConfig: {
          type: "gradient",
          items: [
            {
              value: "-6",
              color: "#142462"
            },
            {
              value: "-3",
              color: "#a5ddf7"
            },
            {
              value: "0",
              color: "#ffffff"
            },
            {
              value: "3",
              color: "#fdb93f"
            },
            {
              value: "6",
              color: "#910013"
            }
          ]
        },
        interactionConfig: {},
        applicationConfig: {},
        staticImageConfig: {
          format: "png",
          bbox: [-110, -65, 110, 65],
          width: 2048,
          height: 1024,
          srs: null,
          urlTemplate:
            "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
        },
        updatedAt: "2017-06-28T13:49:25.708Z"
      }
    },
    {
      id: "32f2e83b-8267-4758-9688-5f63f6db9d29",
      type: "layer",
      attributes: {
        name: "Population using improved drinking-water sources (%)",
        slug: "population-using-improved-drinking-water-sources",
        dataset: "f2fe7588-6d1b-400e-b79c-0c86bf1273ea",
        description: "",
        application: ["rw"],
        iso: [""],
        provider: "cartodb",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          account: "insights",
          body: {
            maxzoom: 18,
            minzoom: 3,
            layers: [
              {
                type: "cartodb",
                options: {
                  sql:
                    "with a as (SELECT the_geom, country, year, values as value FROM urban_population_with_access_to_an_improved_water_source group by country, the_geom, year, values )select countries.the_geom,countries.the_geom_webmercator, a.country, avg(a.value) from countries, a where countries.admin=a.country group by a.country, countries.the_geom, countries.the_geom_webmercator",
                  cartocss:
                    "#urban_population_with_access_to_an_improved_water_source{  polygon-fill: #F1EEF6;  polygon-opacity: 0.8;  line-color: #FFF;  line-width: 0.5;  line-opacity: 1;}#urban_population_with_access_to_an_improved_water_source [ avg <= 100] {   polygon-fill: #91003F;}#urban_population_with_access_to_an_improved_water_source [ avg <= 90] {   polygon-fill: #CE1256;}#urban_population_with_access_to_an_improved_water_source [ avg <= 80] {   polygon-fill: #DF65B0;}#urban_population_with_access_to_an_improved_water_source [ avg <= 50] {   polygon-fill: #C994C7;}#urban_population_with_access_to_an_improved_water_source [ avg <= 30] {   polygon-fill: #F1EEF6;}",
                  cartocss_version: "2.3.0"
                }
              }
            ]
          }
        },
        legendConfig: {
          type: "choropleth",
          items: [
            {
              name: "0-30",
              color: "#F1EEF6"
            },
            {
              name: "30-50",
              color: "#C994C7"
            },
            {
              name: "50-80",
              color: "#DF65B0"
            },
            {
              name: "80-90",
              color: "#CE1256"
            },
            {
              name: "90-100",
              color: "#91003F"
            }
          ]
        },
        interactionConfig: {},
        applicationConfig: {},
        staticImageConfig: {},
        updatedAt: "2017-07-07T13:22:55.035Z"
      }
    },
    {
      id: "34fa9c9e-5748-4fdb-865e-92d581bc58d3",
      type: "layer",
      attributes: {
        name: "Global Snow Cover.",
        slug: "global-snow-cover",
        dataset: "ea67f436-473c-4977-bdf2-8aa0dabbaa6f",
        description: "",
        application: ["rw"],
        iso: ["global"],
        provider: "cartodb",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          account: "wri-rw",
          body: {
            maxzoom: 18,
            minzoom: 3,
            layers: [
              {
                type: "mapnik",
                options: {
                  sql: "SELECT * FROM snow_cover",
                  cartocss:
                    "#snow_cover {raster-opacity:1; raster-scaling:near; raster-colorizer-default-mode: linear; raster-colorizer-default-color:  transparent; raster-colorizer-epsilon:0.11; raster-colorizer-stops: stop(51, #ff4d4d) stop(102, #FEB24C) stop(153, #fff2cc) stop(205, #C7E9B4) stop(254, transparent)}",
                  cartocss_version: "2.3.0",
                  geom_column: "the_raster_webmercator",
                  geom_type: "raster",
                  raster_band: 1
                }
              }
            ]
          }
        },
        legendConfig: {
          type: "gradient",
          items: [
            {
              value: "51",
              color: "#ff4d4d"
            },
            {
              value: "102",
              color: "#FEB24C"
            },
            {
              value: "153",
              color: "#fff2cc"
            },
            {
              value: "205",
              color: "#C7E9B4"
            }
          ]
        },
        interactionConfig: {},
        applicationConfig: {},
        staticImageConfig: {
          format: "png",
          bbox: [-110, -65, 110, 65],
          width: 2048,
          height: 1024,
          srs: null,
          urlTemplate:
            "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
        },
        updatedAt: "2018-04-06T14:25:32.194Z"
      }
    },
    {
      id: "398051aa-fe8b-4ac7-93bb-3f3d206c02f7",
      type: "layer",
      attributes: {
        name: "MODIS Normalized Difference Vegetation Index",
        slug: "modis-normalized-difference-vegetation-index",
        dataset: "c48f0582-164f-4faa-97a2-7ad2e3111d3d",
        description: "",
        application: ["rw"],
        iso: ["global"],
        provider: "cartodb",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          account: "wri-rw",
          body: {
            maxzoom: 18,
            minzoom: 3,
            layers: [
              {
                type: "mapnik",
                options: {
                  sql: "SELECT * FROM modis_1",
                  cartocss:
                    "#modis_1 {raster-opacity:1; raster-scaling:near; raster-colorizer-default-mode: linear; raster-colorizer-default-color:  transparent; raster-colorizer-epsilon:0.11; raster-colorizer-stops: stop(1, #ff4d4d) stop(140, #FEB24C) stop(200, #fff2cc) stop(220, #C7E9B4) stop(240, transparent)}",
                  cartocss_version: "2.3.0",
                  geom_column: "the_raster_webmercator",
                  geom_type: "raster",
                  raster_band: 1
                }
              }
            ]
          }
        },
        legendConfig: {
          type: "gradient",
          items: [
            {
              value: "1",
              color: "#ff4d4d"
            },
            {
              value: "140",
              color: "#FEB24C"
            },
            {
              value: "200",
              color: "#fff2cc"
            },
            {
              value: "220",
              color: "#C7E9B4"
            },
            {
              value: "240",
              color: "#0080ff"
            }
          ]
        },
        interactionConfig: {},
        applicationConfig: {},
        staticImageConfig: {
          format: "png",
          bbox: [-110, -65, 110, 65],
          width: 2048,
          height: 1024,
          srs: null,
          urlTemplate:
            "https://{{account}}.carto.com/api/v1/map/static/bbox/{{token_groupid}}/{{bbox}}/{{width}}/{{height}}.{{format}}"
        },
        updatedAt: "2017-09-25T21:56:32.721Z"
      }
    },
    {
      id: "47835c64-6934-439f-8750-9e3f23debf5c",
      type: "layer",
      attributes: {
        name: "Average Annual Precipitation (1971-2000)",
        slug: "average-annual-precipitation-1971_2000",
        dataset: "12510410-1eb3-4af0-844f-8a05be50b1c1",
        description:
          "The NASA Earth Exchange Global Daily Downscaled Projections (NEX-GDDP) data set is comprised of downscaled climate scenarios for the globe that are derived from the General Circulation Model (GCM) runs conducted under the Coupled Model Intercomparison Project Phase 5 (CMIP5) and across 2 of the 4 greenhouse gas emissions scenarios known as Representative Concentration Pathways (RCPs). The CMIP5 GCM runs were developed in support of the Fifth Assessment Report of the Intergovernmental Panel on Climate Change (IPCC AR5). The NEX-GDDP data set includes downscaled projections for RCP 4.5 and RCP 8.5 from the 21 models and scenarios for which daily scenarios were produced and distributed under CMIP5. Further information on the methodology can be found at https://nex.nasa.gov/nex/static/media/other/NEX-GDDP_Tech_Note_v1_08June2015.pdf.",
        application: ["rw"],
        iso: [],
        provider: "featureservice",
        userId: "58333dcfd9f39b189ca44c75",
        default: true,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          type: "dynamicMapLayer",
          body: {
            url:
              "https://gis-gfw.wri.org/arcgis/rest/services/prep/nex_gddp_indicators/MapServer",
            format: "PNG",
            layers: [6],
            useCors: false
          },
          id: "47835c64-6934-439f-8750-9e3f23debf5c"
        },
        legendConfig: {
          type: "choropleth",
          items: [
            {
              value: "0-200",
              color: "#ffffd9"
            },
            {
              value: "400-800",
              color: "#edf8b1"
            },
            {
              value: "800-1200",
              color: "#c7e9b4"
            },
            {
              value: "1200-1600",
              color: "#7fcdbb"
            },
            {
              value: "1600-2000",
              color: "#41b6c4"
            },
            {
              value: "2000-2400",
              color: "#1d91c0"
            },
            {
              value: "2400-2800",
              color: "#225ea8"
            },
            {
              value: "2800-3200",
              color: "#253494"
            },
            {
              value: ">3200",
              color: "#081d58"
            }
          ],
          unit: "mm/yr"
        },
        interactionConfig: {
          output: []
        },
        applicationConfig: {},
        staticImageConfig: {},
        updatedAt: "2018-04-06T14:40:01.051Z"
      }
    },
    {
      id: "4fb877f5-bf36-402c-b871-c1dd9e54b7d4",
      type: "layer",
      attributes: {
        name: "Political Boundaries (National)",
        slug: "political-boundaries-wri",
        dataset: "134caa0a-21f7-451d-a7fe-30db31a424aa",
        description: "National political boundaries.",
        application: ["rw"],
        iso: ["global"],
        provider: "cartodb",
        userId: "58f63c81bd32c60206ed6b12",
        default: true,
        protected: false,
        published: true,
        env: "production",
        layerConfig: {
          account: "wri-01",
          body: {
            maxzoom: 18,
            minzoom: 3,
            layers: [
              {
                type: "cartodb",
                options: {
                  sql:
                    "SELECT the_geom, the_geom_webmercator, iso, cartodb_id FROM gadm28_countries",
                  cartocss:
                    "#gadm28_countries{  polygon-fill: #3bb2d0;  polygon-opacity: 0;  line-color: #5CA2D1;  line-width: 0.5;  line-opacity: 1;}",
                  cartocss_version: "2.3.0"
                }
              }
            ]
          }
        },
        legendConfig: {
          items: [
            {
              color: "#5CA2D1",
              name: "National Political Boundaries"
            }
          ],
          type: "basic"
        },
        interactionConfig: {},
        applicationConfig: {},
        staticImageConfig: {},
        updatedAt: "2017-10-13T21:25:28.008Z"
      }
    }
  ],
  links: {
    self:
      "http://api.resourcewatch.org/v1/layer?application=rw&page[number]=1&page[size]=10",
    first:
      "http://api.resourcewatch.org/v1/layer?application=rw&page[number]=1&page[size]=10",
    last:
      "http://api.resourcewatch.org/v1/layer?application=rw&page[number]=74&page[size]=10",
    prev:
      "http://api.resourcewatch.org/v1/layer?application=rw&page[number]=1&page[size]=10",
    next:
      "http://api.resourcewatch.org/v1/layer?application=rw&page[number]=2&page[size]=10"
  },
  meta: {
    "total-pages": 74,
    "total-items": 738,
    size: 10
  }
};
export const oviedo = [
  {
    id: "6581",
    name: "Silken Monumental Naranco hotel",
    latitude: "43.364482611815",
    longitude: "-5.863306300692",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "68",
    distance: "48.551590",
    picture_url:
      "http://esphoto360x360.mnstatic.com/c3f1747b5c6aa8b6f2b69936c68ea039"
  },
  {
    id: "666321",
    name: "Meson Bodegon",
    latitude: "43.363795062461",
    longitude: "-5.862561455558",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "53.107727",
    picture_url:
      "http://esphoto360x360.mnstatic.com/a00ea2c4ee89083f49105006f3634fa6"
  },
  {
    id: "95350",
    name: "Meson Sidreria El Tayuelo Restaurant",
    latitude: "43.363393992004",
    longitude: "-5.861702018865",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "132.282333"
  },
  {
    id: "78764",
    name: "Taberna Gallega S.C. Restaurant",
    latitude: "43.363451287784",
    longitude: "-5.864337624723",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "132.845520"
  },
  {
    id: "2226217",
    name: "Café Cambó",
    latitude: "43.365800414744",
    longitude: "-5.863363596471",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "43",
    distance: "189.015350",
    picture_url:
      "http://esphoto360x360.mnstatic.com/095079abd1e0d1ad5ff367e3df6ba644"
  },
  {
    id: "78765",
    name: "La Sidrería Restaurant",
    latitude: "43.363107513107",
    longitude: "-5.864853286739",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "190.174316"
  },
  {
    id: "497981",
    name: "Pedro Miñor Plaza",
    latitude: "43.362992921548",
    longitude: "-5.865311652975",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "128",
    distance: "227.290451",
    picture_url:
      "http://esphoto360x360.mnstatic.com/9e78283e4b3bb419a0271df7e89bb06b"
  },
  {
    id: "2178247",
    name: "Madecort Stylo",
    latitude: "43.366258780980",
    longitude: "-5.862905230235",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "27",
    distance: "232.275574",
    picture_url:
      "http://esphoto360x360.mnstatic.com/1819efb47e49db74aac4f2ad4c42c8d6"
  },
  {
    id: "983551",
    name: "La Tabernilla de Oviedo",
    latitude: "43.362935625768",
    longitude: "-5.865368948754",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "34",
    distance: "235.940247"
  },
  {
    id: "455421",
    name: "Statue of Samuel Sánchez",
    latitude: "43.363508583563",
    longitude: "-5.859925849701",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "16",
    distance: "256.655304"
  },
  {
    id: "105089",
    name: "Sidrería Fanjul Restaurant",
    latitude: "43.363336696225",
    longitude: "-5.865999202329",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "260.684448",
    picture_url:
      "http://esphoto360x360.mnstatic.com/f9a98c3ee1cf39c7d0f183eb37a4bdac"
  },
  {
    id: "1010781",
    name: "La Llantina",
    latitude: "43.362591851091",
    longitude: "-5.860269624378",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "276.344147",
    picture_url:
      "http://esphoto360x360.mnstatic.com/282e263cd2986397181f6456d0acb441"
  },
  {
    id: "118788",
    name: "Casa Lin",
    latitude: "43.362591851091",
    longitude: "-5.860155032819",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "284.326813",
    picture_url:
      "http://esphoto360x360.mnstatic.com/8856035ffd1e19765141c821656e0a59"
  },
  {
    id: "690141",
    name: "El finito",
    latitude: "43.362477259532",
    longitude: "-5.860212328598",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "289.692871"
  },
  {
    id: "749021",
    name: "Vinoteca El Finito ",
    latitude: "43.362534555312",
    longitude: "-5.860155032819",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "83",
    distance: "291.800781",
    picture_url:
      "http://esphoto360x360.mnstatic.com/d43c2118b0cf1574e0c2a30179e0e72d"
  },
  {
    id: "5729",
    name: "Ayre Hotel Alfonso II",
    latitude: "43.366430668318",
    longitude: "-5.861071765291",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "68",
    distance: "295.566376",
    picture_url:
      "http://esphoto360x360.mnstatic.com/8581f905643894dbbfa975cd886a3faf"
  },
  {
    id: "110148",
    name: "Nap Hotel Oviedo",
    latitude: "43.361388639721",
    longitude: "-5.861931201983",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "68",
    distance: "318.410858",
    picture_url:
      "http://esphoto360x360.mnstatic.com/f78a2e5c05522dad1abed9627fcaffd2"
  },
  {
    id: "111638",
    name: "Cascanueces",
    latitude: "43.361331343942",
    longitude: "-5.861472835747",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "334.847290",
    picture_url:
      "http://esphoto360x360.mnstatic.com/6113f31da11e38c1f779e6d263955a87"
  },
  {
    id: "110956",
    name: "Sant Pere Church",
    latitude: "43.360872977706",
    longitude: "-5.863764666928",
    country_id: "63",
    zone_id: "1007",
    city_id: "235589",
    subcategory_id: "14",
    distance: "369.403229",
    picture_url:
      "http://esphoto360x360.mnstatic.com/284bebd8e206bf40a0a4e9e96bec2c15"
  },
  {
    id: "263651",
    name: "La Sal Restaurant",
    latitude: "43.361617822839",
    longitude: "-5.865999202329",
    country_id: "63",
    zone_id: "994",
    city_id: "5014",
    subcategory_id: "29",
    distance: "372.152740",
    picture_url:
      "http://esphoto360x360.mnstatic.com/2cc3856b8cb61d30b27843a5c507ad86"
  }
];
const subcategories = [
  {
    id: "131",
    name: "Abbeys"
  },
  {
    id: "75",
    name: "Airports"
  },
  {
    id: "24",
    name: "Amusement Parks"
  },
  {
    id: "73",
    name: "Apartment Hotels"
  },
  {
    id: "72",
    name: "Apartments"
  },
  {
    id: "137",
    name: "Archaeological Sites"
  },
  {
    id: "40",
    name: "Bars"
  },
  {
    id: "125",
    name: "Bays"
  },
  {
    id: "9",
    name: "Beaches"
  },
  {
    id: "32",
    name: "Beauty Shops"
  },
  {
    id: "52",
    name: "Bike Paths"
  },
  {
    id: "38",
    name: "Bowling Alleys"
  },
  {
    id: "142",
    name: "Bridges"
  },
  {
    id: "71",
    name: "Bungalows"
  },
  {
    id: "78",
    name: "Bus Stations"
  },
  {
    id: "86",
    name: "Cabaret"
  },
  {
    id: "43",
    name: "Cafés"
  },
  {
    id: "74",
    name: "Campsites"
  },
  {
    id: "109",
    name: "Canyons"
  },
  {
    id: "37",
    name: "Casinos"
  },
  {
    id: "12",
    name: "Castles"
  },
  {
    id: "13",
    name: "Cathedrals"
  },
  {
    id: "3",
    name: "Caves"
  },
  {
    id: "116",
    name: "Cemeteries"
  },
  {
    id: "14",
    name: "Churches"
  },
  {
    id: "28",
    name: "Cinemas"
  },
  {
    id: "132",
    name: "Citadels"
  },
  {
    id: "115",
    name: "Cities"
  },
  {
    id: "18",
    name: "City Halls"
  },
  {
    id: "80",
    name: "Cliffs"
  },
  {
    id: "47",
    name: "Climbing"
  },
  {
    id: "84",
    name: "Coffee Shops"
  },
  {
    id: "66",
    name: "Concerts"
  },
  {
    id: "96",
    name: "Consulates"
  },
  {
    id: "69",
    name: "Country Houses"
  },
  {
    id: "119",
    name: "Courtyards"
  },
  {
    id: "111",
    name: "Coves"
  },
  {
    id: "36",
    name: "Culinary Interest"
  },
  {
    id: "138",
    name: "Deserts"
  },
  {
    id: "95",
    name: "Embassies"
  },
  {
    id: "82",
    name: "Exhibitions"
  },
  {
    id: "65",
    name: "Festivals"
  },
  {
    id: "98",
    name: "Fire Stations"
  },
  {
    id: "113",
    name: "Fjords"
  },
  {
    id: "121",
    name: "Flea Markets"
  },
  {
    id: "51",
    name: "Football Fields"
  },
  {
    id: "5",
    name: "Forests"
  },
  {
    id: "10",
    name: "Gardens"
  },
  {
    id: "50",
    name: "Golf Courses"
  },
  {
    id: "139",
    name: "Guesthouses"
  },
  {
    id: "54",
    name: "Gyms"
  },
  {
    id: "110",
    name: "Harbors"
  },
  {
    id: "100",
    name: "Health Clinics"
  },
  {
    id: "53",
    name: "Hiking"
  },
  {
    id: "15",
    name: "Historical Monuments"
  },
  {
    id: "105",
    name: "Horse Racing"
  },
  {
    id: "99",
    name: "Hospitals"
  },
  {
    id: "70",
    name: "Hostels"
  },
  {
    id: "68",
    name: "Hotels"
  },
  {
    id: "30",
    name: "Internet Cafes"
  },
  {
    id: "6",
    name: "Islands"
  },
  {
    id: "89",
    name: "Jet Ski"
  },
  {
    id: "59",
    name: "Kitesurfing"
  },
  {
    id: "133",
    name: "Ksars"
  },
  {
    id: "2",
    name: "Lakes"
  },
  {
    id: "104",
    name: "Leisure Areas"
  },
  {
    id: "102",
    name: "Markets"
  },
  {
    id: "120",
    name: "Mosques"
  },
  {
    id: "124",
    name: "Motels"
  },
  {
    id: "11",
    name: "Museums"
  },
  {
    id: "42",
    name: "Music Venues"
  },
  {
    id: "67",
    name: "Musicals"
  },
  {
    id: "4",
    name: "Nature Reserves"
  },
  {
    id: "143",
    name: "Neighborhoods"
  },
  {
    id: "39",
    name: "Nightclubs"
  },
  {
    id: "41",
    name: "Nightlife Districts"
  },
  {
    id: "83",
    name: "Of Cultural Interest"
  },
  {
    id: "81",
    name: "Of Touristic Interest"
  },
  {
    id: "57",
    name: "Paddle Court"
  },
  {
    id: "55",
    name: "Paintball"
  },
  {
    id: "19",
    name: "Palaces"
  },
  {
    id: "62",
    name: "Parachuting"
  },
  {
    id: "17",
    name: "Paradors"
  },
  {
    id: "97",
    name: "Police Stations"
  },
  {
    id: "135",
    name: "Ponds"
  },
  {
    id: "45",
    name: "Race Tracks"
  },
  {
    id: "48",
    name: "Rafting"
  },
  {
    id: "118",
    name: "Rainforest"
  },
  {
    id: "130",
    name: "Resort Towns"
  },
  {
    id: "106",
    name: "Resorts"
  },
  {
    id: "29",
    name: "Restaurants"
  },
  {
    id: "7",
    name: "Rivers"
  },
  {
    id: "114",
    name: "Roads"
  },
  {
    id: "103",
    name: "Ruins"
  },
  {
    id: "22",
    name: "Safari"
  },
  {
    id: "26",
    name: "Shopping Centres"
  },
  {
    id: "25",
    name: "Shopping Malls"
  },
  {
    id: "27",
    name: "Shops"
  },
  {
    id: "94",
    name: "Shows"
  },
  {
    id: "60",
    name: "Skating"
  },
  {
    id: "49",
    name: "Skiing"
  },
  {
    id: "31",
    name: "Spa"
  },
  {
    id: "33",
    name: "Spa"
  },
  {
    id: "58",
    name: "Sports Centers"
  },
  {
    id: "88",
    name: "Sports clubs for kids"
  },
  {
    id: "64",
    name: "Sports Competitions"
  },
  {
    id: "87",
    name: "Sports-Related"
  },
  {
    id: "128",
    name: "Squares"
  },
  {
    id: "44",
    name: "Stadiums"
  },
  {
    id: "16",
    name: "Statues"
  },
  {
    id: "129",
    name: "Streets"
  },
  {
    id: "61",
    name: "Surfing"
  },
  {
    id: "134",
    name: "Synagogues"
  },
  {
    id: "34",
    name: "Tapas Bars"
  },
  {
    id: "85",
    name: "Tea Rooms"
  },
  {
    id: "136",
    name: "Temples"
  },
  {
    id: "56",
    name: "Tennis Court"
  },
  {
    id: "92",
    name: "Theaters"
  },
  {
    id: "23",
    name: "Theme Parks"
  },
  {
    id: "101",
    name: "Tourist Information"
  },
  {
    id: "77",
    name: "Train Stations"
  },
  {
    id: "93",
    name: "Turkish Baths"
  },
  {
    id: "122",
    name: "Universities"
  },
  {
    id: "127",
    name: "Unusual Places"
  },
  {
    id: "91",
    name: "Vacation Resorts"
  },
  {
    id: "126",
    name: "Valleys"
  },
  {
    id: "8",
    name: "Viewpoints"
  },
  {
    id: "112",
    name: "Villages"
  },
  {
    id: "108",
    name: "Volcanoes"
  },
  {
    id: "90",
    name: "Wakeboard"
  },
  {
    id: "1",
    name: "Waterfalls"
  },
  {
    id: "20",
    name: "Waterparks"
  },
  {
    id: "79",
    name: "Wetlands"
  },
  {
    id: "141",
    name: "Wineries"
  },
  {
    id: "123",
    name: "Youth Hostels"
  },
  {
    id: "21",
    name: "Zoos"
  }
];
export function getCategoryByID(id) {
  for (let i = 0; i < subcategories.length; i++) {
    if (subcategories[i].id === id) return subcategories[i].name;
  }
  return false;
}
export const topciudades = [
  {
    img:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    temperature: "20º",
    city: "Gijon"
  },
  {
    img:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    temperature: "18º",
    city: "Oviedo"
  },
  {
    img:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    temperature: "22º",
    city: "Aviles"
  },
  {
    img:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    temperature: "17º",
    city: "Langreo"
  },
  {
    img:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    temperature: "26º",
    city: "Llanes"
  },
  {
    img:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    temperature: "12º",
    city: "Mieres"
  },
  {
    img:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    temperature: "19º",
    city: "Cudillero"
  }
];
