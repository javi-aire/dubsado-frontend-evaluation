import React, { useState, useEffect, useRef } from "react";
import Feed from "./components/Feed";
import { IPost } from './types';
import "./App.css";

/**
 *
 * Main App Component 
 * - Handles data fetching/state mgmt
 * - Passes data to Feed Component
 * - Fetches more data when user reaches end of current feed
 * 
*/
function App() {
  const [feed, setFeed] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  // observer ref for infinite scroll
  const observerTarget = useRef(null);

  // data fetch (abstracted for infinite scroll purposes)
  const populateFeed = async (signal: AbortSignal) => {
    setIsLoading(true);

    try {
      // fetches data then adds with the previous 
      // posts in state
      const resp = await fetch('/api/posts', { signal });
      const posts = await resp.json();
      
      setFeed((prevPosts: IPost[]) => [...prevPosts, ...posts]);
    } catch (err) {
      // logs an error if there is one
      // TODO: add error messaging for user display
      console.error(err)
    } finally {
      // set loading state to false after fetch is complete
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // create an abort controller/signal for 
    // fetch cleanup (see return statement)
    const controller = new AbortController();
    const signal = controller.signal;
    // observer for infinite scroll
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          populateFeed(signal);
        }
      },
      { threshold: 1 }
    );

    const current = observerTarget.current;
    

    if (current) {
      observer.observe(current);
    }    

    return () => {
      controller.abort();
      if (current) {
        observer.unobserve(current);
      }      
    }
  }, [observerTarget]);

  return (
    <section className="app">
      <h1 className="app__title">Hello, Dubsado!</h1>
      <Feed posts={feed} />
      {isLoading && <h2>Loading...</h2>}
      <div ref={observerTarget}></div>
    </section>
  );
}

export default App;
