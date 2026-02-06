const config = [
    {
        'replace': '{{githubDetails}}',
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
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "flowmcp-schemas",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-schemas",
                "githubWorkflowPath": "update-readme.yaml"
            },
            {
                "title": "flowmcp-servers",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-servers",
                "githubWorkflowPath": "test-on-release.yml"
            }
        ]
    },
    {
        'replace': '{{x402}}',
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
                "title": "x402-mcp-validator",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-mcp-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "x402-mcp-monitor",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-mcp-monitor",
                "githubWorkflowPath": "collect.yml"
            }
        ]
    },
    {
        'replace': '{{validators}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "a2a-agent-validator",
                "githubUserName": "FlowMCP",
                "githubRepository": "a2a-agent-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "erc8004-registry-parser",
                "githubUserName": "FlowMCP",
                "githubRepository": "erc8004-registry-parser",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    },
    {
        'replace': '{{community}}',
        'preset': 'githubDetails',
        'projects': [
            {
                "title": "lukso-community-server",
                "githubUserName": "FlowMCP",
                "githubRepository": "lukso-community-server",
                "githubWorkflowPath": ""
            }
        ]
    }
]


export { config }
