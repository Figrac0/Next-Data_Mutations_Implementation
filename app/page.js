import { Suspense } from "react";
import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";
import FeedLoading from "./feed/loading";

async function LatestPosts() {
    try {
        const latestPosts = await getPosts(2);
        return <Posts posts={latestPosts} />;
    } catch (error) {
        return (
            <div className="error-state">
                <p>Unable to load recent posts. Please try again later.</p>
            </div>
        );
    }
}

export default async function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="welcome-card">
                    <h1 className="home-title">Welcome to NextPosts </h1>
                    <p className="home-subtitle">
                        Share your thoughts, ideas, and moments with our
                        community. Your voice matters here.
                    </p>
                    <div className="cta-actions">
                        <a href="/new-post" className="primary-cta">
                            Create Your First Post
                            <span className="arrow">→</span>
                        </a>
                        <p className="cta-subtitle">
                            Join the conversation and connect with others
                        </p>
                    </div>
                </div>
            </header>

            <section className="latest-posts-section">
                <div className="section-header">
                    <div>
                        <h2 className="section-title">
                            Latest from the Community
                        </h2>
                        <p className="section-description">
                            See what others are sharing right now
                        </p>
                    </div>
                    <div className="inspiration-badge">
                        <span className="badge-icon">💡</span>
                        <span>Get inspired</span>
                    </div>
                </div>

                <div className="posts-container">
                    <Suspense
                        fallback={
                            <div className="loading-wrapper">
                                <FeedLoading />
                                <p className="loading-hint">
                                    Loading fresh content...
                                </p>
                            </div>
                        }>
                        <LatestPosts />
                    </Suspense>
                </div>
            </section>

            <div className="home-footer">
                <div className="create-prompt">
                    <div className="prompt-icon"></div>
                    <div className="prompt-content">
                        <h3>Ready to share something?</h3>
                        <p>
                            Your story is waiting to be told. Create a post and
                            join our growing community of voices.
                        </p>
                        <a href="/new-post" className="secondary-cta">
                            Start Writing Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
