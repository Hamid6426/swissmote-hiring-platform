import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AuthSection from '@/components/Auth/AuthSection';

const ResetPassword = () => {
    const router = useRouter();
    const { token } = router.query;
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/auth/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, password: newPassword }),
            });

            const data = await response.json();
            setIsLoading(false);

            if (response.ok) {
                setMessage('Password has been successfully reset.');

                const userRole = data.role;
                if (!userRole) {
                    setMessage('Role not found in the response. Please contact support.');
                    return;
                }

                switch (userRole) {
                    case 'Admin':
                        router.push('/dashboard/admin');
                        break;
                    case 'Teacher':
                        router.push('/dashboard/teacher');
                        break;
                    case 'Student':
                        router.push('/dashboard/student');
                        break;
                    case 'Parent':
                        router.push('/dashboard/parent');
                        break;
                    default:
                        alert('Role not recognized. Please contact support.');
                        break;
                }
            } else {
                setMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setIsLoading(false);
            setMessage('Error occurred. Please try again.');
        }
    };

    return (
        <div className="w-full flex flex-row min-h-dvh dark:bg-neutral-800 dark:text-white">
        <AuthSection/>
        <div className="w-7/12 min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-6 text-center">Reset Your Password</h2>
            <form onSubmit={handleChangePassword} className="w-full max-w-sm">
                <div className="flex flex-col gap-4">
                    {/* New Password */}
                    <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium mb-2">
                            New Password
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            name="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-blue-500 font-bold focus:outline-none focus:ring focus:ring-blue-300 disabled:opacity-50"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </div>
            </form>

            {/* Message Alert */}
            {message && (
                <div
                    className={`mt-4 px-4 py-2 text-sm rounded ${
                        message === 'Passwords do not match' || message.includes('Error') || message.includes('wrong')
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                    }`}
                    role="alert"
                >
                    {message}
                </div>
            )}
        </div>
        </div>
    );
};

export default ResetPassword;
