class SubjectsController < ApplicationController
  respond_to :json
  before_filter :strip_non_mass_assignment_vars

  def index
    @subjects = Subject.all
    respond_with @subjects.to_json  :only => [:id, :text, :hasChildren]
  end


  def edit
    @subject = Subject.find(params[:id])
  end

  def create
    @subject = Subject.new(params)

    if @subject.save
      render :json => @subject.to_json(:only => [:id, :created_at, :updated_at])
    else
      render :json => @subject.errors.to_json, :status => :bad_request
    end
  end

  def update
    @subject = Subject.find(params[:id])

    if @subject.update_attributes(params)
      render :json => @subject.to_json(:only => [:created_at, :updated_at])
    else
      render :text => @subject.errors, :status => :bad_request
    end
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject.destroy
    respond_with @subject
  end

  protected
  def strip_non_mass_assignment_vars
    params.delete(:action)
    params.delete(:authenticity_token)
    params.delete(:controller)
  end
end
