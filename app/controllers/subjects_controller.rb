class SubjectsController < ApplicationController
  respond_to :json, :html
  before_filter :strip_non_mass_assignment_vars

#  def index
#    @subjects = Subject.all
#    respond_to do |format|
#      format.html { @subjects }
#      format.json { @subjects.to_json :only => [:id, :name, :parent_id, :lft, :rgt] }
#    end
#  end

  def index

    if params[:id] and !params[:id].empty?
      @subjects = Subject.find(params[:id]).children
    else
      @subjects = Subject.where(:parent_id => nil).first.children
    end

    render :json => @subjects.to_json(:only => [:id, :name, :parent_id])
  end

#  def show
#    if params[:id]
#      @subjects = Subject.where(:id => nil).children(params[:id]).to_json :only => [:id, :name, :parent_id]
#    else
#      @subjects = Subject.where(:id => nil).to_json :only => [:id, :name, :parent_id]
#    end
#  end


  def new
    @subject = Subject.new
  end

  def edit
    @subject = Subject.find(params[:id])
  end

  def create
      respond_to do |format|
        format.html {
          @subject = Subject.new(params[:subject])
            if @subject.save
              redirect_to subjects_path
            else
              render :new
            end
        }
        format.json {
          @subject = Subject.new(params)
          if @subject.save
            render @subject.to_json(:only => [:id, :name, :parent_id])
          else
            render :json => @subject.errors.to_json, :status => :bad_request
          end
        }
    end
  end

  def update
      @subject = Subject.find(params[:id])
      respond_to do |format|
        format.html {

            if @subject.update_attributes(params[:subject])
              redirect_to subjects_path
            else
              render :new
            end
        }
        format.json {
          if @subject.update_attributes(params)
            render @subject.to_json(:only => [:id, :name, :parent_id])
          else
            render :json => @subject.errors.to_json, :status => :bad_request
          end
        }
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
