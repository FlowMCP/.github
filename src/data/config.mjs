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
                "title": "flowmcp-schemas",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-schemas",
                "githubWorkflowPath": "update-readme.yaml"
            },
            {
                "title": "flowmcp-servers",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowmcp-servers",
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
                "githubWorkflowPath": "test-on-release.yml"
            }
        ]
    },
    {
        'replace': '{{validation}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "x402-mcp-validator",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-mcp-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
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
            },
            {
                "title": "mcp-agent-assessment",
                "githubUserName": "FlowMCP",
                "githubRepository": "mcp-agent-assessment",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "mcp-apps-validator",
                "githubUserName": "FlowMCP",
                "githubRepository": "mcp-apps-validator",
                "githubWorkflowPath": "test-on-push.yml"
            },
            {
                "title": "mcp-agent-validator",
                "githubUserName": "FlowMCP",
                "githubRepository": "mcp-agent-validator",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    }
]


export { config }
