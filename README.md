# DrawFlow

Welcome to DrawFlow! 🎨 DrawFlow is a powerful web application that allows users to create, edit, and share flowcharts and diagrams with ease. It combines the flexibility of Next.js with the robust backend services of Convex and secure authentication via Kinde.

## Features

- **Intuitive Drawing Interface**: Easily create and manage flowcharts and diagrams with our user-friendly interface.
- **Real-Time Collaboration**: Work on diagrams simultaneously with other users in real time.
- **Secure Authentication**: Sign up and log in using Kinde for a secure and smooth authentication process.
- **State Management**: Backend state management with Convex to ensure your diagrams are always saved and synchronized.

## Technologies

- **Next.js**: A React framework for building server-rendered or statically-exported React applications.
- **Convex**: A backend-as-a-service for managing real-time data and state.
- **Kinde**: Authentication platform for managing user identities and access.

## Installation

### Prerequisites

- Node.js (>= 18.0.0)
- npm or yarn

### Getting Started

1. **Clone the Repository**

    ```bash
    git clone https://github.com/xanmoy/drawflow.git
    cd drawflow
    ```

2. **Install Dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Set Up Environment Variables**

    Create a `.env.local` file in the root directory of your project and add the following environment variables:

    ```bash
    KINDE_CLIENT_ID=
    KINDE_CLIENT_SECRET=
    KINDE_ISSUER_URL=
    KINDE_SITE_URL=http://localhost:3000
    KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
    KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

    # Deployment used by `npx convex dev`
    CONVEX_DEPLOYMENT= # team: xanmoy, project: drawflow

    NEXT_PUBLIC_CONVEX_URL=


    ```

4. **Run the Development Server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Navigate to `http://localhost:3000` to view your application in the browser.

## Configuration

### Convex

Ensure that your Convex instance is set up correctly. You should configure Convex with your API key and URL in the environment variables.

### Kinde

To set up Kinde authentication, follow these steps:

1. Sign up for a Kinde account and create a new application.
2. Configure your application in the Kinde dashboard and obtain your `CLIENT_ID` and `CLIENT_SECRET`.
3. Add these credentials to your `.env.local` file as described above.

## Deployment

For deploying DrawFlow, you can use platforms like Vercel, Netlify, or any other platform that supports Next.js applications. Ensure you set up environment variables on your deployment platform similar to the `.env.local` file.

## Contributing

We welcome contributions to DrawFlow! If you have any ideas or improvements, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.


## Contact

For any inquiries or support, please contact us at:

- **Email**: contact@xanmoy.me
- **Twitter**: [@DrawFlowApp](https://twitter.com/xanmoy)
- **GitHub Issues**: [DrawFlow Issues](https://github.com/xanmoy/drawflow/issues)
