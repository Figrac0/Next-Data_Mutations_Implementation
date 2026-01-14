export default function FeedLoading() {
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <div className="spinner"></div>
            </div>
            <p className="loading-text">Loading feed data...</p>
            <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}
