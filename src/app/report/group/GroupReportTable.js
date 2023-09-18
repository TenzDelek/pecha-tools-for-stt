import Link from "next/link";
import React from "react";

const GroupReportTable = ({ usersStatistic }) => {
  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg w-11/12 md:w-4/5 max-h-[80vh]">
        <table className="table  ">
          {/* head */}
          <thead className="text-gray-700 bg-gray-50">
            <tr>
              <th>Transcriber Name</th>
              <th>Task Submitted</th>
              <th>Task Reviewed</th>
              <th>Reviewed minutes</th>
              <th>Reviewed syllable count</th>
              <th>Rs.</th>
            </tr>
          </thead>
          <tbody>
            {usersStatistic.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link href={`/report/user/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.noSubmitted}</td>
                <td>{user.noReviewed}</td>
                <td>{(user.reviewedSecs / 60).toFixed(2)}</td>
                <td>{user.syllableCount}</td>
                <td>{((user.reviewedSecs / 60) * 5 + user.syllableCount * 0.4).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default GroupReportTable;
