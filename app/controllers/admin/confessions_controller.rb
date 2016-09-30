class Admin::ConfessionsController < Admin::BaseController
  load_and_authorize_resource

  def index
    @search = Confession.all.ransack params[:q]
    @statuses_for_select = Confession.statuses
    @confessions = @search.result.order(created_at: :desc).page(params[:page])
      .per Settings.admin.confessions.per_page
  end

  def edit
  end

  def update
    if @confession.update_attributes confession_params
      flash[:success] = t ".success"
    else
      flash[:danger] = t ".error"
    end
    redirect_to admin_confessions_url
  end

  def destroy
    ids = params[:confession_ids].nil? ? params[:id] : params[:confession_ids]

    if ids.nil?
      flash[:danger] = t ".fail"
    else
      @confessions = Confession.find ids
      if Confession.destroy @confessions
        flash[:success] = t ".success"
      else
        flash[:error] = t ".error"
      end
    end
    redirect_to admin_confessions_url
  end

  private
  def confession_params
    params.require(:confession).permit :id, :admin_comment, :status
  end
end
