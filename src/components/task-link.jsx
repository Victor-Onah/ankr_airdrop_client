import { CgSpinner } from "react-icons/cg";
import { useState } from "react";
import fetchUser from "../../utils/fetch-user";
import getUserTasks from "../../utils/get-user-tasks";
import toast from "../../utils/toast";
import confetti from "canvas-confetti";

const TaskLink = ({ id, link, userId, dispatch }) => {
    const [confirming, setConfirming] = useState(false);
    const [showConfirmButton, setShowConfirmButton] = useState(false);

    console.log(link);

    const celebrate = () => {
        confetti({
            particleCount: 100,
            spread: 360,
            origin: { y: 0.5 },
        });
    };

    const confirmTaskCompletion = async (trials = 1) => {
        setConfirming(true);

        try {
            const response = await fetch(
                `https://ankr-airdrop-server.onrender.com/api/user/tasks/confirm?task_id=${id}`,
                // `http://localhost:3000/api/user/tasks/confirm?task_id=${id}`,
                {
                    headers: {
                        // 'X-Enc-Id': btoa(id)
                        "X-Enc-Id": btoa("user008"),
                    },
                },
            );

            if (!response.ok && trials < 5) {
                return setTimeout(
                    () => confirmTaskCompletion(trials + 1),
                    5_000,
                );
            }
            if (!response.ok) {
                setShowConfirmButton(false);
                return setConfirming(false);
            }

            await Promise.all([fetchUser(dispatch), getUserTasks(dispatch)]);
            setConfirming(false);
            celebrate();
            toast.success(
                "Task confirmation was successful. Your balance has been updated",
            );
        } catch (error) {
            console.log("Task completion verification error: ", error);

            toast.error("Task confirmation failed");

            if (trials < 5) {
                setTimeout(() => confirmTaskCompletion(trials + 1), 5_000);
            } else {
                setShowConfirmButton(false);
                setConfirming(false);
            }
        }
    };

    const handleTaskStart = (e) => {
        e.preventDefault();

        const anchorTag = document.createElement("a");

        anchorTag["href"] =
            `http://localhost:3000/api/user/tasks/initialize?task_id=${id}&redirect_to=${link}&id=${userId}`;
        anchorTag["rel"] = "noopener noreferrer";
        anchorTag["target"] = "_blank";
        anchorTag["style"]["display"] = "none";

        document.body.appendChild(anchorTag);

        anchorTag.click();
        anchorTag.remove();
        setShowConfirmButton(true);
        setConfirming(true);

        setTimeout(() => setConfirming(false), 5_000);
    };

    return (
        <>
            {showConfirmButton ? (
                <a
                    onClick={async (e) => {
                        e.target.setAttribute("disabled", true);
                        await confirmTaskCompletion();
                    }}
                    href="javascript:void(0)"
                    disabled={confirming}
                >
                    {confirming ? (
                        <span>
                            <CgSpinner
                                style={{ animation: "spin 1s linear infinite" }}
                            />
                        </span>
                    ) : (
                        "Confirm"
                    )}
                </a>
            ) : (
                <a
                    onClick={handleTaskStart}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="javascript:void(0)"
                >
                    Start
                </a>
            )}
        </>
    );
};

export default TaskLink;
