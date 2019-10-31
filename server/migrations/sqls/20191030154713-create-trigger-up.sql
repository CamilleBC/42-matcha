CREATE TRIGGER watch_user_trigger AFTER INSERT
ON user_table FOR EACH ROW
EXECUTE PROCEDURE notify_trigger();