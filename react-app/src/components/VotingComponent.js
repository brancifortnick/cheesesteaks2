import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteUp, voteDown, resetVote, submitVote, loadLocationVotes, loadUserVote } from '../store/vote';
import './VotingComponent.css';

const VotingComponent = ({ itemId, itemTitle, locationId }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    // Get vote data from Redux store (now includes backend percentages)
    const votes = useSelector(state => state.votes.votes[itemId] || { 
        upvotes: 0, 
        downvotes: 0,
        upvote_percentage: 0,
        downvote_percentage: 0,
        rating: 'No votes yet',
        rating_class: 'neutral',
        total: 0
    });
    const userVote = useSelector(state => state.votes.userVotes[itemId]);

    // Load votes when component mounts or locationId changes
    useEffect(() => {
        const loadData = async () => {
            if (locationId || itemId) {
                // Load total votes for this location
                await dispatch(loadLocationVotes(locationId || itemId));
                
                // Load user's specific vote if logged in
                if (currentUser) {
                    await dispatch(loadUserVote(locationId || itemId, currentUser.id));
                }
            }
        };
        
        loadData();
    }, [dispatch, locationId, itemId, currentUser]);

    const handleVote = async (voteType) => {
        // Ensure user is logged in
        if (!currentUser) {
            alert('Please log in to vote');
            return;
        }

        const wasVoted = userVote === voteType;
        
        // Optimistically update the UI
        if (wasVoted) {
            // User clicked same vote - remove it
            dispatch(resetVote(itemId));
        } else {
            // User clicked different vote or no previous vote
            if (userVote) {
                // Remove previous vote first, then add new vote
                dispatch(resetVote(itemId));
            }
            // Add new vote
            dispatch(voteType === 'up' ? voteUp(itemId) : voteDown(itemId));
        }

        // Submit to backend - this will reload accurate totals
        try {
            const action = wasVoted ? 'decrement' : 'increment';
            await dispatch(submitVote(locationId || itemId, voteType, action, currentUser.id));
        } catch (error) {
            console.error('Vote submission failed:', error);
            // Revert optimistic update on error
            if (wasVoted) {
                dispatch(voteType === 'up' ? voteUp(itemId) : voteDown(itemId));
            } else {
                dispatch(resetVote(itemId));
                if (userVote) {
                    dispatch(userVote === 'up' ? voteUp(itemId) : voteDown(itemId));
                }
            }
        }
    };

    // Use backend-calculated percentages and rating
    const totalVotes = votes.total || (votes.upvotes + votes.downvotes);
    const upvotePercentage = votes.upvote_percentage || 0;
    const downvotePercentage = votes.downvote_percentage || 0;

    // Use backend rating or calculate locally as fallback
    const getLocationRating = () => {
        if (votes.rating && votes.rating_class) {
            return { text: votes.rating, class: votes.rating_class };
        }
        
        // Fallback calculation if backend data unavailable
        if (totalVotes === 0) return { text: 'No votes yet', class: 'neutral' };
        if (upvotePercentage >= 80) return { text: 'Excellent', class: 'excellent' };
        if (upvotePercentage >= 60) return { text: 'Good', class: 'good' };
        if (upvotePercentage >= 40) return { text: 'Mixed', class: 'mixed' };
        return { text: 'Poor', class: 'poor' };
    };

    const rating = getLocationRating();

    return (
        <div className="voting-component">
            <div className="location-rating">
                <span className={`rating-badge ${rating.class}`}>
                    {rating.text}
                </span>
                <div className="rating-percentage">
                    {totalVotes > 0 ? `${upvotePercentage}% positive` : 'Rate this location!'}
                </div>
            </div>

            <div className="vote-buttons">
                <button
                    className={`vote-btn upvote ${userVote === 'up' ? 'active' : ''}`}
                    onClick={() => handleVote('up')}
                    title="Good experience"
                >
                    <span className="vote-icon">👍</span>
                    <span className="vote-count">{votes.upvotes}</span>
                </button>

                <button
                    className={`vote-btn downvote ${userVote === 'down' ? 'active' : ''}`}
                    onClick={() => handleVote('down')}
                    title="Bad experience"
                >
                    <span className="vote-icon">👎</span>
                    <span className="vote-count">{votes.downvotes}</span>
                </button>
            </div>

            {totalVotes > 0 && (
                <div className="vote-stats">
                    <div className="vote-breakdown">
                        <span className="stat-good">{upvotePercentage}% Good</span>
                        <span className="stat-bad">{downvotePercentage}% Bad</span>
                    </div>
                    <div className="total-votes">
                        {totalVotes} total vote{totalVotes !== 1 ? 's' : ''}
                    </div>
                </div>
            )}
        </div>
    );
};

export default VotingComponent;