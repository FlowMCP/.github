# AGENTS.md - FlowMCP Agent Guide

This document serves as the primary entry point for AI agents to understand and navigate the FlowMCP ecosystem.

## What is FlowMCP?

FlowMCP is a Model Context Protocol (MCP) framework that provides structured API access for cryptocurrency and financial data providers. It enables AI agents to interact with various blockchain and DeFi services through standardized schemas and server implementations.

## Repository Overview

FlowMCP consists of multiple repositories across three pillars:

### 1. Core Framework
**flowmcp-core** - Node.js module and specification  
- Repository: https://github.com/FlowMCP/flowmcp-core
- Documentation: https://github.com/FlowMCP/flowmcp-core/blob/main/README.md
- Specification v1.2.2: https://github.com/FlowMCP/flowmcp-core/blob/main/spec/v.1.2.2-spec.md
- Filtering Guide: https://github.com/FlowMCP/flowmcp-core/blob/main/spec/FILTERING.md

### 2. Schema Collection
**flowmcp-schemas** - Valid API schemas for various providers  
- Repository: https://github.com/FlowMCP/flowmcp-schemas
- Documentation: https://github.com/FlowMCP/flowmcp-schemas/blob/main/README.md
- Schema Overview: https://github.com/FlowMCP/flowmcp-schemas/blob/main/schemas/SCHEMAS.md
- Visual Schema Browser: https://flowmcp.github.io/flowmcp-schemas/

### 3. Server Implementations
**flowmcp-servers** - Ready-to-use MCP servers with FlowMCP integration  
- Repository: https://github.com/FlowMCP/flowmcp-servers
- Documentation: https://github.com/FlowMCP/flowmcp-servers/blob/main/README.md

### 4. Community Server
**community-server** - Community-driven MCP server  
- Repository: https://github.com/FlowMCP/community-server
- Documentation: https://github.com/FlowMCP/community-server/blob/main/README.md
- Server Management: https://github.com/FlowMCP/community-server/blob/main/src/SERVER_MANAGER.md

### 5. Payment Layer (x402 Protocol)
**x402-core** - Implementation of x402 payment protocol
- Repository: https://github.com/FlowMCP/x402-core
- Documentation: https://github.com/FlowMCP/x402-core/blob/main/README.md

**x402-mcp-middleware** - Middleware for x402 payment integration
- Repository: https://github.com/FlowMCP/x402-mcp-middleware

### 6. Agent Validators
**x402-mcp-validator** - MCP server validator with x402 payment checks
- Repository: https://github.com/FlowMCP/x402-mcp-validator

**a2a-agent-validator** - A2A Protocol Agent Card validator
- Repository: https://github.com/FlowMCP/a2a-agent-validator

**erc8004-registry-parser** - ERC-8004 on-chain agent registration parser
- Repository: https://github.com/FlowMCP/erc8004-registry-parser

**mcp-apps-validator** - MCP Apps UI extension validator
- Repository: https://github.com/FlowMCP/mcp-apps-validator

**mcp-agent-assessment** - Unified 5-layer assessment pipeline
- Repository: https://github.com/FlowMCP/mcp-agent-assessment

**mcp-agent-validator** - Multi-protocol web validator
- Repository: https://github.com/FlowMCP/mcp-agent-validator

## Getting Started

1. **Learn the basics**: Start with [flowmcp-core README](https://github.com/FlowMCP/flowmcp-core/blob/main/README.md)
2. **Understand schemas**: Browse the [visual schema collection](https://flowmcp.github.io/flowmcp-schemas/)
3. **Try implementations**: Use ready servers from [flowmcp-servers](https://github.com/FlowMCP/flowmcp-servers)
4. **Validate agents**: Use [mcp-agent-validator](https://github.com/FlowMCP/mcp-agent-validator) for multi-protocol validation

## Navigation

- For **technical specifications**: See flowmcp-core/spec/
- For **available APIs**: See flowmcp-schemas/schemas/
- For **server deployment**: See flowmcp-servers/
- For **payment integration**: See x402-core/
- For **agent validation**: See mcp-agent-validator/

This document provides the overview - detailed functionality and implementation guides are available in each repository's documentation.