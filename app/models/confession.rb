class Confession < ActiveRecord::Base
  enum status: [:waiting ,:accepted]
end
