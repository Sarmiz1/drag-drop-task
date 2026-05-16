import { useState, useCallback } from 'react';
import { teamMembers as initialMembers } from '../data/initialBoard';

export const useTeam = () => {
  const [members, setMembers] = useState(initialMembers);

  const handleAddMember = useCallback(() => {
    const newMember = {
      id: Date.now(),
      img: `https://api.dicebear.com/7.x/notionists/svg?seed=${Date.now()}&backgroundColor=transparent`,
    };
    setMembers((prev) => [...prev, newMember]);
  }, []);

  return {
    members,
    handleAddMember,
  };
};
