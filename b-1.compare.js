const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    const [startHour, startMinute] = dayStart.split(":");
    const [endHour, endMinute] = dayEnd.split(":");

    const dayStartElapsedFrom12 = (+startHour * 60) + (+startMinute);
    const dayEndElapsedFrom12 = (+endHour * 60) + (+endMinute);
    const [meetingStartHour, meetingStartMinute] = startTime.split(":");

    const meetingStartElapsedFrom12 = (+meetingStartHour * 60) + (+meetingStartMinute);
    if (meetingStartElapsedFrom12 < dayStartElapsedFrom12) return false;

    if (meetingStartElapsedFrom12 > dayEndElapsedFrom12) return false;

    if ((meetingStartElapsedFrom12 + durationMinutes) > dayEndElapsedFrom12) return false;

    return true;
}

scheduleMeeting("7:00", 15);
scheduleMeeting("07:15", 30);
scheduleMeeting("7:30", 30);
scheduleMeeting("11:30", 60);
scheduleMeeting("17:00", 45);
scheduleMeeting("17:30", 30);
scheduleMeeting("18:00", 15);