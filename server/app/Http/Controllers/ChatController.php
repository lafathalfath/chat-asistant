<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use OpenAI\Laravel\Facades\OpenAI;

class ChatController extends Controller
{
    public function getChats(){
        $table = DB::table('response')->join('chat', 'response.chat_id', '=', 'chat.id')->select('response.*', 'chat.chat as chat')->get();
        return response()->json([
            'status' => 200,
            'message' => 'success',
            'payload' => $table
        ], 200);
        // return response()->json($table);
    }
    public function sendChat(Request $request){
        Chat::create(['chat' => $request->message]);
        $result = OpenAI::chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => $request->message],
            ],
        ]);
        $response = $result->choices[0]->message->content;

        $chatid = Chat::where('chat', $request->message)->value('id');
        Response::create(['chat_id' => $chatid, 'response' => $response]);
        return response()->json([
            'status' => 200,
            'message' => 'success',
            'input' => $request->message,
            'response' => $response
        ], 200);
    }
}
