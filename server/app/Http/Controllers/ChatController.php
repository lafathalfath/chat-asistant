<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use OpenAI\Laravel\Facades\OpenAI;

class ChatController extends Controller
{
    public function sendChat(Request $request){
        $result = OpenAI::chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => $request->message],
            ],
        ]);
        $response = $result->choices[0]->message->content;
        return response()->json([
            'status' => 200,
            'message' => 'success',
            'input' => $request->message,
            'response' => $response
        ], 200);
    }
}
