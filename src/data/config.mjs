const config = [
    {
        'replace': '{{core}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "flowmcp-cli",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-cli",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "flowmcp-core",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-core",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "flowmcp-schemas-public",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-schemas-public",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "flowmcp-spec",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-spec",
                "githubWorkflowPath": "generate-llms-txt.yml"
            },
            {
                "title": "flowmcp-servers",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-servers",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "flowmcp-grading",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-grading",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    },
    {
        'replace': '{{payment}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "x402-core",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-core",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "x402-mcp-middleware",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-mcp-middleware",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "x402-flowmcp-org",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-flowmcp-org",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    },
    {
        'replace': '{{validation}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "mcp-agent-server",
                "githubUserName": "FlowMCP",
                "githubRepository": "mcp-agent-server",
                "githubWorkflowPath": "build.yml"
            }
        ]
    },
    {
        'replace': '{{addons}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "geo-gtfs-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "geo-gtfs-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "geo-geojson-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "geo-geojson-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "geo-csv-tsv-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "geo-csv-tsv-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "geo-overpass-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "geo-overpass-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "time-csv-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "time-csv-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    }
]


export { config }
