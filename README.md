# Model Upload API

This is an Express.js API for managing 3D models. It allows you to retrieve a list of 3D models and upload new ones to a Firestore database. The API integrates with Firebase for storage and Firestore for storing model metadata.

## API Endpoints

### 1. Get Models

**Endpoint:** `GET /models`

Retrieves a list of all models stored in the database.

**Response:**

```json
[
  {
    "id": "model_id",
    "name": "Model Name",
    "description": "Model Description",
    "url": "Model URL",
    "uploadDate": "upload_date"
  }
]
```

### 2. Upload Models

**Endpoint:** `POST /upload`

Uploads a new 3D model to the database.

**Request Body:**

```json
{
  "name": "Model Name",
  "description": "Model Description",
  "file": "(binary file data)"
}
```

**Response:**

```json
{
  "id": "model_id",
  "name": "Model Name",
  "description": "Model Description",
  "url": "Model URL",
  "uploadDate": "upload_date"
}
```

## Installation & Running the Server

1. Clone the repository:
   ```sh
   git clone https://github.com/Vishakha3106/mini-app-backend.git
   cd mini-app-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```

