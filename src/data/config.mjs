const config = [
    {
        'replace': '{{githubDetails}}',
        'preset': 'githubDetailsCodeCoverage',
        'projects': [
            {
                "title": "flowmcp-core",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowMCP-core",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "flowmcp-schemas",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowMCP-schemas",
                "githubWorkflowPath": "update-readme.yaml"
            },
            {
                "title": "flowmcp-servers",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowMCP-servers",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "flowmcp-cli",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowMCP-cli",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    },
    {
        'replace': '{{x402-com}}',
        'preset': 'githubDetails',
        'projects': [
            {
                "title": "x402-core",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-core",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "x402-mcp-middleware",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-mcp-middleware",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "x402-mcp-validator",
                "githubUserName": "FlowMCP",
                "githubRepository": "x402-mcp-validator",
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
        'replace': '{{experimental}}',
        'preset': 'githubDetails',
        'projects': [
            {
                "title": "mcp-auth-middleware",
                "githubUserName": "flowMCP",
                "githubRepository": "mcp-auth-middleware",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "mcp-dynamic-tools-middleware",
                "githubUserName": "flowMCP",
                "githubRepository": "mcp-dynamic-tools-middleware",
                "githubWorkflowPath": "test-on-release.yml"
            }
        ]
    },
    {
        'replace': '{{documentationRepository}}',
        'preset': 'documentationRepositoryCodeCoverage',
        'projects': [
            {
                "title": "community-sever",
                "githubUserName": "flowMCP",
                "githubRepository": "community-server",
                "imageUrl": "",
                "uptimeRobotId": "m800841892-66d45cc47d17f8587c3c969f",
                "url": "https://community.flowmcp.org",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "website",
                "githubUserName": "flowMCP",
                "githubRepository": "www-flowmcp-org",
                "imageUrl": "",
                "uptimeRobotId": "m800843065-01b21fc8a0c00272f7e08839",
                "url": "https://www.flowmcp.org",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "cloudflare-flowmcp",
                "githubUserName": "flowMCP",
                "githubRepository": "cloudflare-flowmcp-authless",
                "imageUrl": "",
                "uptimeRobotId": "",
                "url": "",
                "githubWorkflowPath": "test-on-push.yml"
            }
        ]
    }
]


export { config }
