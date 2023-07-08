import React from "react";

export default function (props) {
    const { member, handleChange, handleSubmit, resetForm } = props;
    return (
        <div className="FormContainer">
            <div className="FormContent">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label>
                        Üye Adı:
                        <input
                            type="text"
                            name="membername"
                            value={member.membername}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <br />
                    <label>
                        Üye Soyadı:
                        <input
                            type="text"
                            name="membersurname"
                            value={member.membersurname}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <br />
                    <label>
                        Üye E-Posta:
                        <input
                            type="mail"
                            name="membermail"
                            value={member.membermail}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <br />
                    <label>
                        Pozisyon:
                        <input
                            type="text"
                            name="position"
                            value={member.position}
                            onChange={(event) => handleChange(event)}
                        />
                    </label>
                    <br />
                    <div className="buttonContainer">
                        <button type="submit">Kaydet!</button>
                        <button type="change">Değiştir!</button>
                        <button type="reset" onClick={resetForm}>
                            Sıfırla!
                        </button>
                    </div>
                </form>
            </div>
            <hr size="3px" color="black" />
        </div>
    );
}