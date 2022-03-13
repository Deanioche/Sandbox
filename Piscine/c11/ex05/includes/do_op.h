/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   do_op.h                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/30 17:30:19 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/30 17:30:22 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef DO_OP_H
# define DO_OP_H

# include<unistd.h>

void	ft_putnbr(int x);
int		ft_add(int x, int y);
int		ft_sub(int x, int y);
int		ft_mul(int x, int y);
int		ft_div(int x, int y);
int		ft_modul(int x, int y);
int		ft_strcmp(char *s1, char *s2);
int		ft_atoi(char *s);

#endif
