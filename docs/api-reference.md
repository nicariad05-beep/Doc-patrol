# API Reference

## Authentication

### POST /auth/login

Authenticate using your credentials.

**Request:**
```json
{
  "username": "your-username",
  "password": "your-password"
}
```

**Response:**
```json
{
  "token": "jwt-token-here",
  "expires_in": 3600
}
```

See the [authentication overview](https://docs.docpatrol.example.com/auth/overview) for more details.

> **Note:** The old `/v1/auth` endpoint has been deprecated. Migrate to the new endpoint.

## Users

### GET /users/:id

Retrieve user information by ID.

**Parameters:**
- `id` (required): User ID

**Response:**
```json
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": "https://cdn.docpatrol.example.com/avatars/default.png"
}
```

See the [users guide](https://docs.docpatrol.example.com/guide/users) for more information.

## Error Handling

For error codes, see the [error reference](https://docs.docpatrol.example.com/errors).

## Legacy API

The legacy v0 API is still available at [https://api-v0.docpatrol.example.com](https://api-v0.docpatrol.example.com) but will be removed soon.

## Rate Limiting

Learn about rate limits on the [pricing page](https://docpatrol.example.com/pricing/plans).