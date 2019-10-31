CREATE FUNCTION notify_trigger() RETURNS trigger AS $$
DECLARE
BEGIN
  PERFORM pg_notify('watch_user_table', row_to_json(NEW)::text);
  RETURN new;
END;
$$ LANGUAGE plpgsql;