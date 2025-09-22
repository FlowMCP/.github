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
                "githubUserName": "flowMCP",
                "githubRepository": "flowMCP-schemas",
                "githubWorkflowPath": "update-readme.yaml"
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
            }
        ]
    },
    {
        'replace': '{{mcp-middleware}}',
        'preset': 'githubDetails',
        'projects': [
            {
                "title": "mcp-oauth-middleware",
                "githubUserName": "flowMCP",
                "githubRepository": "mcp-oauth-middleware",
                "githubWorkflowPath": "test-on-release.yml"
            },
            {
                "title": "mcp-dynamic-tools-middleware",
                "githubUserName": "flowMCP",
                "githubRepository": "mcp-dynamic-tools-middleware",
                "githubWorkflowPath": "test-on-release.yml"
            },
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

    
/*
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
*/
]


export { config }
