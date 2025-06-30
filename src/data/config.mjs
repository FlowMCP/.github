const config = [
    {
        'replace': '{{githubDetails}}',
        'preset': 'githubDetails',
        'projects': [
            {
                "title": "flowmcp-core",
                "githubUserName": "FlowMCP",
                "githubRepository": "flowMCP-core",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "flowmcp-schemas",
                "githubUserName": "flowMCP",
                "githubRepository": "flowMCP-schemas",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "flowmcp-servers",
                "githubUserName": "flowMCP",
                "githubRepository": "flowMCP-servers",
                "githubWorkflowPath": "test-on-release.yml"
            }
        ]
    },
    {
        'replace': '{{documentationRepository}}',
        'preset': 'documentationRepository',
        'projects': [
            {
                "title": "community-sever",
                "githubUserName": "flowMCP",
                "githubRepository": "community-server",
                "imageUrl": "",
                "uptimeRobotId": "m800841892-66d45cc47d17f8587c3c969f",
                "url": "https://community.flowmcp.org"
            },
            {
                "title": "website",
                "githubUserName": "flowMCP",
                "githubRepository": "www-flowmcp-org",
                "imageUrl": "",
                "uptimeRobotId": "m800843065-01b21fc8a0c00272f7e08839",
                "url": "https://www.flowmcp.org"
            }
        ]
    },
    {
        'replace': '{{x402}}',
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
            }
        ]
    }
]


export { config }
