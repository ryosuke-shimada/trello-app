import React from "react";

export function TaskCardDeleteButton({
    taskCardsList,
    setTaskCardsList,
    taskCard,
}) {
    const taskCardDeleteButton = (id) => {
        // タスクカードを削除
        setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
    };
    return (
        <div>
            <button
                className="taskCardDeliteButton"
                onClick={() => taskCardDeleteButton(taskCard.id)}
            >
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        </div>
    );
}
