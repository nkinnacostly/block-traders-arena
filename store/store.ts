/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Types
export interface UserDetails {
  id: string;
  first_name: string;
  username: string;
  last_name: string;
  email: string;
  notification_status: number;
  email_verified_at: string;
  verification_status: "YES" | "NO";
  user_status: string;
  block_path: string;
  block_level: number;
  phone: string;
  language: string | null;
  timezone: string | null;
  account_status: "Active" | "Inactive";
  learners_level: string;
  image_url: string | null;
  twoFA: "YES" | "NO";
  notification_email: number;
  notification_sms: number;
  notification_push: number;
  verification_token: string | null;
  created_at: string;
  updated_at: string;
  paid: number;
  uuid: string;
  deleted_at: string | null;
  has_journal: number | string;
}

interface Statistics {
  // Add statistics fields
}

interface DialogData {
  data: any;
}

interface UserSlice {
  // @ts-ignore
  loggedInUserDetails: UserDetails;
  setLoggedInUserDetails: (loggedInUserDetails: UserDetails) => void;
}

interface DialogSlice {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  // @ts-ignore
  data: DialogData;
  setData: (data: DialogData) => void;
}

interface StatsSlice {
  // @ts-ignore
  statistics: Statistics;
  setStatistics: (statistics: Statistics) => void;
}

interface VideoSlice {
  watchedVideos: number;
  incrementWatchedVideos: () => void;
  resetWatchedVideos: () => void;
}

// Store slices
const createUserSlice = (set: any): UserSlice => ({
  loggedInUserDetails: {} as UserDetails,
  setLoggedInUserDetails: (loggedInUserDetails: UserDetails) =>
    set(() => ({
      loggedInUserDetails,
    })),
});

const createDialogSlice = (set: any): DialogSlice => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: {} as DialogData,
  setData: (data: DialogData) => set({ data: { data } }),
});

const createStatsSlice = (set: any): StatsSlice => ({
  statistics: {} as Statistics,
  setStatistics: (statistics: Statistics) =>
    set(() => ({
      statistics,
    })),
});

const createVideoSlice = (set: any): VideoSlice => ({
  watchedVideos: 0,
  incrementWatchedVideos: () =>
    set((state: { watchedVideos: number }) => ({
      watchedVideos: state.watchedVideos + 1,
    })),
  resetWatchedVideos: () =>
    set(() => ({
      watchedVideos: 0,
    })),
});

// Create stores with persistence where needed
export const useUserStore = create<UserSlice>()(
  persist(createUserSlice, {
    name: "user-data",
    storage: createJSONStorage(() => localStorage),
  })
);

export const useDialog = create<DialogSlice>()(createDialogSlice);

export const useStatsStore = create<StatsSlice>()(
  persist(createStatsSlice, {
    name: "user-stats",
    storage: createJSONStorage(() => localStorage),
  })
);

export const useVideoStore = create<VideoSlice>()(createVideoSlice);

// Selectors
export const selectUserDetails = (state: UserSlice) =>
  state.loggedInUserDetails;
export const selectStatistics = (state: StatsSlice) => state.statistics;
export const selectWatchedVideos = (state: VideoSlice) => state.watchedVideos;
