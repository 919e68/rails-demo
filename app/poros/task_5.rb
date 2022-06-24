class Task5 < ActiveRecord::Base
  include NoteChecker
end

# this module should be on app/models/concerns folder
module NoteChecker
  include ActiveSupport::Concern

  def has_simple_notes?
    notes.not_reminders_or_todos.any?
  end

  def has_to_do_notes?
    notes.to_dos.any?
  end

  def has_reminder_notes?
    notes.reminders.any?
  end
end
