export const fetchGitHubRepositories = async (email) => {
    try {
      const response = await fetch(`https://api.github.com/search/repositories?q=user:${email}`);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      return [];
    }
  };
  