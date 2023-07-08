import React from "react";

export default function (props) { 
   
    const { team } = props;
    return (
      <div className="TeamContainer">
        <h2>Takım Üyeleri</h2>
        {team.map((member, index) => (
          <ul className="TeamContent">
            <li key="membername">Üye Adı:{member.membername}</li>
            <li key="membername">Üye Soyadı:{member.membersurname}</li>
            <li key="membermail">Üye E-Posta:{member.membermail}</li>
            <li key="memberposition">Üye Pozisyonu:{member.position}</li>
          </ul>
        ))}
      </div>
    );
}