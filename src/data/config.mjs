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
                "title": "gtfs-sqlite-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "gtfs-sqlite-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "geojson-sqlite-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "geojson-sqlite-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "csv-tsv-sqlite-toolkit",
                "githubUserName": "FlowMCP",
                "githubRepository": "csv-tsv-sqlite-toolkit",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    }
]


export { config }
