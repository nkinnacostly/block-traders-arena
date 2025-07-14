"use client";
import React from "react";
import { useGetUserMeetings } from "../services/get-user-meetings";
import Link from "next/link";

interface Meeting {
  id: number;
  zoom_meeting_id: string;
  type: string;
  topic: string;
  start_time: string;
  end_time: string;
  duration: string;
  join_url: string;
  meeting_password: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  status: number;
  meetings: Meeting[];
  count: number;
}

function LiveClasses() {
  const { data, isLoading } = useGetUserMeetings();
  console.log(data?.data, "live classes");

  if (isLoading) {
    return <div className="text-center py-4">Loading live classes...</div>;
  }

  const apiData = data?.data as ApiResponse;

  if (!apiData?.meetings || apiData?.meetings.length === 0) {
    return (
      <div className="text-center py-4">
        No live classes scheduled at the moment.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {apiData.meetings.map((meeting: Meeting) => (
        <div
          key={meeting.id}
          className="flex w-full h-[97px] rounded-tr-lg rounded-br-lg hover:bg-[#1E1E1E] transition-colors duration-200"
        >
          <div className="bg-[#D4AF37] w-8"></div>
          <div className="w-[calc(100%-32px)] flex flex-col justify-center">
            <div className="flex justify-start space-x-5 w-[80%] mt-2 border-b-2 ml-3">
              <p className="font-medium">{meeting.topic}</p>
              {/* <p className="capitalize">{meeting.type}</p> */}
              <p>{meeting.duration}</p>
            </div>
            <div className="flex justify-start ml-3 space-x-5">
              <p>Meeting Link</p>
              <Link
                className="text-[#A0A0FF] hover:underline"
                href={meeting.join_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {meeting.join_url}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LiveClasses;
