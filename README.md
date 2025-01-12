# Reddit Clone

A Reddit clone built with React, Vite, Firebase, and Tailwind CSS, utilizing the Reddit API.

## Features

- 🔍 Real-time search with rate limiting
- 🔄 Infinite scroll with pagination
- 🎨 Reddit-like UI/UX
- 🚀 Fast loading with skeleton screens
- 🔥 Firebase integration
- 🌙 Filter posts (Hot, New, Controversial, Rising, Top)
- 💬 View post details and comments
- 📊 Vote and share functionality

## Tech Stack

- React.js
- Vite
- Firebase
- Tailwind CSS
- Axios
- Reddit API
- React Icons

## Environment Variables

Create a `.env` file in the root directory:

```properties
VITE_REDDIT_API_BASE_URL=https://www.reddit.com

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # React components
│   ├── Navbar/     # Navigation components
│   ├── MainPage/   # Main page components
│   ├── Feeds/      # Feed components
│   └── FeedCard/   # Individual post card
├── firebase/       # Firebase configuration
├── App.jsx         # Root component
└── main.jsx        # Entry point
```

## Features Implementation

### Rate Limiting

- Implements cooldown period between requests
- Tracks Reddit API rate limits
- Error handling for rate limit exceeded

### Infinite Scroll

- Pagination using Reddit's 'after' parameter
- Lazy loading of posts
- Smooth loading states

### Search

- Real-time search with debouncing
- Limited to 5 results per query
- Dropdown results with subreddit information

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/reddit-clone.git
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

- Copy `.env.example` to `.env`
- Fill in your Firebase credentials

4. Start the development server

```bash
npm run dev
```

## API Integration

The project uses the following Reddit API endpoints:

- `/search.json` - For search functionality
- `/r/{subreddit}/{filter}.json` - For fetching posts
- `/user/{username}/about.json` - For user profile images

## Performance Optimization

- Debounced search queries
- Infinite scroll with pagination
- Image lazy loading
- Skeleton loading states
- Rate limiting implementation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for learning purposes.

## Acknowledgments

- Reddit API Documentation
- Firebase Documentation
- React Community
- Tailwind CSS Team
