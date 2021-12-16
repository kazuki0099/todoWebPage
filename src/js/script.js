const taskValue = document.getElementsByClassName('task_value')[0];
const taskPriorityValue = document.getElementsByClassName('task_Priority_value')[0];

const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

//追加ボタンを作成
const addTasks = (task) => {
    // 入力したタスクを追加・表示
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task   
    //タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    listItem.appendChild(deleteButton);

    //削除ボタンをクリックし、イベントを発動（タスクが削除）
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
};

//削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
};

//追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const task = taskValue.value;
    const priority = taskPriorityValue.value;
    console.log(task);
    try{
        if(task==""||priority=="")throw '入力なし';
    }catch(e){
        console.error(e);
        alert("入力が不足しています");
        return;
    }
    const taskinf = "Todo: " + task + " /優先度: " +priority;
    addTasks(taskinf);
    taskValue.value = '';
    taskPriorityValue.value = '';
});

function clock1(){
    var nowTime = new Date(); //  現在日時を得る
    var nowHour = nowTime.getHours(); // 時を抜き出す
    var nowMin  = nowTime.getMinutes(); // 分を抜き出す
    var nowSec  = nowTime.getSeconds(); // 秒を抜き出す

    if(nowHour < 10)nowHour = "0" + nowHour;
    if(nowMin < 10)nowMin = "0" + nowMin;
    if(nowTime < 10)nowTime = "0" + nowTime;

    var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
    document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('clock1()',1000);

function chk() {
	if($('input[name="weather"]').val() =="") {
		alert("必須項目が記入されていません。");
		return false;
	}
}
