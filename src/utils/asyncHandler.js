const AsyncHandler = (requestHandler) => async (req, res, next) => {
    try {
        return await requestHandler(req, res, next);
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            statusCode: error.status_code,
            message: error.message,
        });
    }
};

module.exports = AsyncHandler;
