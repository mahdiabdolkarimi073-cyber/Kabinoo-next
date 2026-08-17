import { NextResponse } from "next/server";

export async function GET() {
    const jsonBody = {
        "action": "token",
        "TerminalId": "15328516",
        "Amount": "10000",
        "ResNum": "123456",
        "RedirectUrl": "https://kabinoo.ir"
    }
    const json = await fetch("https://sep.shaparak.ir/onlinepg/onlinepg", {
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(jsonBody),
        method: "POST"
    }).then(e => e.json());

    const form = await fetch("https://sep.shaparak.ir/onlinepg/onlinepg", {
        headers: {
            'content-type': "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(jsonBody).toString(),
        method: "POST"
    }).then(e => e.json());

    const f = new FormData();
    for (const [k,v] of Object.entries(jsonBody)) {
        f.append(k,v);
    }
    const formData = await fetch("https://sep.shaparak.ir/onlinepg/onlinepg", {
        body: f,
        method: "POST"
    }).then(e => e.json());

    return NextResponse.json({
        formData,
        json,
        form,
        jsonBody
    })
}