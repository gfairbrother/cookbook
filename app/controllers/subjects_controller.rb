class SubjectsController < ApplicationController
  respond_to :json

  def index
    @subjects = Subject.all
    respond_with @subjects
  end
end
